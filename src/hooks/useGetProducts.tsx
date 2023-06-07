import { ProductType } from "@/types/productType";
import { ProductsFetchResponse } from "@/types/productsResponseType";
import axios, { AxiosPromise }  from "axios";
import { useState } from "react";


const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL,{ query })
}


export function useGetProducts() {
  const [ products, setProducts ] = useState<ProductsFetchResponse[]>([]);

  const query = `
    query {
      allProducts {
        category,
        id,
        name,
        image_url,
        price_in_cents
      }
    }
  `;

  const filteredProducts = async () => fetcher(query);

  return {
    data: filteredProducts()
  }

}
