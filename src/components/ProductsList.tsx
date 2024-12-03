"use client"

import { useProducts } from "@/hooks/useProducts"
import styled from "styled-components";
import { ProductCard } from "./ProductCard";

const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  max-width: 100%;
  gap: 32px;
  margin-top: 36px;
`

export function ProductsList() {
  const { data } = useProducts();

  return (
    <ProductsContainer>
      {data?.map(product =>
        <ProductCard
          key={product.id}
          name={product.name}
          imageURL={product.image_url}
          id={product.id}
          price={product.price_in_cents}
        />
      )
      }
    </ProductsContainer>
  )
}
