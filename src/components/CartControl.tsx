import styled from "styled-components";
import CartIcon from "./icons/CartIcons";

const CartButton = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  background: transparent;
`


export default function CartControl() {
  return (
    <CartButton>
      <CartIcon />
    </CartButton>
  )
}
