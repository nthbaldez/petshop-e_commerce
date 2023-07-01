"use client"

import styled from "styled-components";
import CartIcon from "./icons/CartIcon";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CartButton = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  background: transparent;
`

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  text-align: center;
  padding: 2px 5px;
  top: 15px;
  font-size: 12px;
  background-color: var(--red-500);
  color: white;
  position: absolute;
  margin-left: -10px;
`
interface CartControlProps {
  navigate: string;
}

export default function CartControl({ navigate }:CartControlProps ) {

  const router = useRouter();

  function handleNavigateToCart() {
    router.push(navigate);
  }
  const { value } = useLocalStorage('cart-items', []);

  return (
    <CartButton onClick={handleNavigateToCart}>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </CartButton>
  )
}
