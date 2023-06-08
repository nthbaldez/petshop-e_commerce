"use client"

import { useProducts } from "@/hooks/useProducts"
import styled from "styled-components";
import Image from 'next/image';
import { ProductCard } from "./ProductCard";

const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  max-width: 100%;
  gap: 32px;
`



export function ProductsList() {
  const { data } = useProducts();

  return (
    <ProductsContainer>
      { data?.map(product => 
          <ProductCard />
        )
      }
    </ProductsContainer>
  )
}
