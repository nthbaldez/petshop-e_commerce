import { ProductType } from "./productType";

export interface ProductsFetchResponse {
    data: {
      allProducts: ProductType[]
    }
}
