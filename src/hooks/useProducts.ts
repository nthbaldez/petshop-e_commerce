import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";
import { useFilter } from "./useFilter";
import { mountQuery } from "@/utils/mountFilters";

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
  return axios.post(API_URL, { query });
}

export function useProducts() {
  const { type, priority } = useFilter();

  const queryMounted = mountQuery(type, priority);
  const { data } = useQuery({
    queryFn: () => fetchProducts(queryMounted),
    queryKey: ['products-data', type], 
  });

  return {
    data: data?.data?.data?.allProducts
  }
}
