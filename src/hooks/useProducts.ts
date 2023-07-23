import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";
import { useFilter } from "./useFilter";
import { mountQuery } from "@/utils/mountFilters";
import { useDeferredValue } from "react";
import Product from "@/app/product/page";

interface Product {
  name: string;
  price_in_cents: number;
  id: string;
  image_url: string;
}

interface ProductsFetchResponse {
  data: {
    allProducts: Product[]
  }
}

const fetchProducts = (query: string): AxiosPromise<ProductsFetchResponse> => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
  console.log(API_URL);
  return axios.post(API_URL, { query });
}

export function useProducts() {

  const { type, priority, search } = useFilter();
  const searchDeferred = useDeferredValue(search);
  const queryMounted = mountQuery(type, priority);

  const { data } = useQuery({
    queryFn: () => fetchProducts(queryMounted),
    queryKey: ['products-data', type, priority], 
  });

  const allProducts = data?.data?.data?.allProducts;
  const filteredProductsBySearch = allProducts?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()));
  
  return {
    data: filteredProductsBySearch
  }
}
