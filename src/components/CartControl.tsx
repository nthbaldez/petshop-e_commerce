"use client"

import styled from "styled-components";
import CartIcon from "./icons/CartIcons";
import useLocalStorage from "@/hooks/useLocalStorage";

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


export default function CartControl() {

  const { value } = useLocalStorage('cart-items', []);

  return (
    <CartButton>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </CartButton>
  )
}
