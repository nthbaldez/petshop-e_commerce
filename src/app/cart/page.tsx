"use client"

import BackButton from "@/components/BackButton";
import CartItem from "@/components/CartItem";
import { DefaultPageLayout } from "@/components/DefaultPageLayout";
import EmptyCart from "@/components/EmptyCart";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/productType";
import { formatPrice } from "@/utils/formatPrice";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  @media(min-width: ${props => props.theme.desktopBreakPoint}){
    flex-direction: row;
  }
`
const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`
const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  justify-content: start;

  header {
    margin-top: 1.38rem;

    h3 {
      color: var(--gray-600);
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 150%;
      text-transform: uppercase;
    }

    p {
      font-size: 1rem;
      font-weight: 300;
      line-height: 150%;

      strong {
        color: var(--gray-600);
      }
    }
  }
`
const AsideContainer = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 352px;
    padding: 16px 24px;

    background: white;

    h3 {
      font-weight: 600;
      font-size: 20px;
      color: var(--textos-dark);
      text-transform: uppercase;
      margin-bottom: 30px;
    }
`
const ShopFinishBtn = styled.button`
  color: white;
  border-radius: 4px;
  background: var(--green-300);
  padding: 12px;
  width: 100%;
  border: none;
  margin-top: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
const TotalItem = styled.div<{ isBold: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-weight: ${props => props.isBold ? '600' : '400'};
  font-size: 16px;
  line-height: 150%;

  margin-bottom: 12px;
`

const Divider = styled.span`
  width: 100%;
  height: 1px;
  margin: 8px auto;
  padding: 0px;
  background: var(--gray-300);
`

export default function Cart() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", []);
  const [items, setItems] = useState<ProductInCart[]>([]);

  const calculateTotalValue = (items: ProductInCart[]) => {
    return items.reduce((total, item) => total += (item.price_in_cents * item.quantity), 0)
  }

  useEffect(() => {
    setItems(value);
  }, [value]);

  const cartTotalValue = formatPrice(calculateTotalValue(value));
  const deliveryFee = 4000;
  const cartTotalWithDelivery = formatPrice(calculateTotalValue(value) + deliveryFee)

  function handleUpdateQuantity(id: string, quantity: number) {
    const cartListUpdated = value.map(item => {
      if (item.id !== id) return item;
      return {
        ...item,
        quantity: quantity
      }
    })
    updateLocalStorage(cartListUpdated);
    console.log('atualizou a quantidade');
  }

  function handleDelete(id: string) {
    const itemsList = items.filter(item => item.id !== id);
    updateLocalStorage(itemsList);
    setItems(itemsList);
  }



  return (
    <DefaultPageLayout>
      <Wrapper>
        {
          value.length == 0 ?
            <EmptyCart />
            :
            <MainContainer>
              <BackButton navigate="/" />
              <header>
                <h3>Seu Carrinho</h3>
                <p>Total {items.length} produtos <strong>{cartTotalValue}</strong></p>
              </header>

              <CartList>
                {items.map(item =>
                  <CartItem
                    handleUpdateQuantity={handleUpdateQuantity}
                    handleDelete={handleDelete}
                    product={item}
                    key={item.id}
                  />
                )}
              </CartList>
            </MainContainer>
        }
        <AsideContainer>
          <h3>Resumo do pedido</h3>
          <TotalItem isBold={false}>
            <p>Subtotal de produtos</p>
            <p>{cartTotalValue}</p>
          </TotalItem>
          <TotalItem isBold={false}>
            <p>Entrega</p>
            <p>{formatPrice(deliveryFee)}</p>
          </TotalItem>
          <Divider />
          <TotalItem isBold>
            <p>Total</p>
            <p>{cartTotalWithDelivery}</p>
          </TotalItem>
          <ShopFinishBtn>FINALIZAR COMPRA</ShopFinishBtn>
        </AsideContainer>
      </Wrapper>
    </DefaultPageLayout>
  )
}
