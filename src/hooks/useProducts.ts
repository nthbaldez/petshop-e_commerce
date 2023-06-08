import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";



interface Product {
  name: string;
  price_in_cents: number;
  id: string;
}


interface ProductsFetchResponse {
  data: {
    allProducts: Product[]
  }
}

const fetchProducts = (): AxiosPromise<ProductsFetchResponse> => {
  const API_URL = "http://localhost:3333/";
  const queryAll = 
  `query {
      allProducts {
        id,
        name,
        price_in_cents
      }
    }
  `
  return axios.post(API_URL, 
    {
      query: queryAll
    }
  );
}

export function useProducts() {
  const { data } = useQuery({
    queryFn: fetchProducts,
    queryKey: ['products-data'], 
  });

  return {
    data: data?.data?.data?.allProducts
  }
}
