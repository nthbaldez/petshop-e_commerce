import styled from "styled-components";
import CartIcon from "./icons/CartIcon";
import BackButton from "./BackButton";

const EmptyCartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    width: 100%;

    margin-top: 1.38rem;
    padding: 64px 24px;
  }
`

export default function EmptyCart() {
  return (
    <EmptyCartContainer>
      <BackButton navigate="/"/>
      <div>
        <CartIcon color="#737380"/>
        <strong>SEU CARRINHO ESTÁ VAZIO</strong>
        <p>faça login para ver o seu carrinho e comece a comprar</p>
      </div>
      
    </EmptyCartContainer>
  )
}
