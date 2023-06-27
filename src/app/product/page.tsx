"use client"

import BackArrow from '@/components/icons/BackArrow';
import CartIcon from '@/components/icons/CartIcons';
import { useProduct } from '@/hooks/useGetProduct';
import { formatPrice } from '@/utils/formatPrice';
import Link from 'next/link';
import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  padding: 2rem 10rem;
  max-height: 100vh;

  a {
    > div {
    display: flex;
    align-items: center;
    
      svg {
        width: 24px;
        height: 24px;
        margin-right: 11px;
      }
    }
  }


  @media (min-width: 1440px) {
    padding: 2rem 20rem;
  }
`

const MainContainerProduct = styled.main`
  display: grid;
  grid-template-columns: 64% 36%;
  gap: 32px;
  max-width: 100%;

  .productImage {
    background-size: cover;
    img {
      max-width: 100%;
      height: auto;
    }
  }

  .productDescription {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    
    p {
      font-size: 12px;
      margin-bottom: 58px;
    }

    .title {
      color: var(--gray-400);

      h3 {
        margin-bottom: 12px;
      }

      h1 {
        margin-bottom: 4px;
      }

      strong {
        color: #000;
      }

      margin-bottom: 24px;
    }

    .description {
      display: flex;
      flex-direction: column;
      gap: 8px;
      color: var(--gray-500);
      max-width: 100%;
      p {
        font-size: 14px
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      max-width: 448px;
      padding: 12px 0;

      font-weight: 400;
      font-size: 14px;
      text-transform: uppercase;
      background-color: var(--blue-500);
      border: none;
      color: var(--white);
      border-radius: 5px;

      &:hover {
        cursor: pointer;
        filter: brightness(80%);
      }

      svg {
        width: 24px;
        height: 24px;
      }

      @media (min-width: 768px) {
        margin-top: 222px;
      }
    }
  }
`

interface SearchParamsProps {
  searchParams: {
    id: string;
  }
}

export default function Product({searchParams}: SearchParamsProps) {
  
  const { data } = useProduct(searchParams.id);
    
  const handleAddToCart = () => {
      let cartItems = localStorage.getItem('cart-items');
      if (cartItems) {
        let cartItemsArray = JSON.parse(cartItems);
        
        let existingProductIndex = cartItemsArray.findIndex((item: { id: string; }) => item.id === searchParams.id);

        if (existingProductIndex != -1){
            cartItemsArray[existingProductIndex].quantity += 1;
        } else {
            cartItemsArray.push({ ...data, quantity: 1, id: searchParams.id })
        }
        localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
      } else {
        const newCart = [{ ...data, quantity: 1, id: searchParams.id }]
        localStorage.setItem('cart-items', JSON.stringify(newCart));
      }
  }
  return (
    <MainContainer>
      <Link href="/">
        <div>
          <BackArrow/>
          <span>Voltar</span>
        </div>
      </Link>
      <MainContainerProduct>
        <div className="productImage">
          <img src={data?.image_url} alt="" />
        </div>
        <div className="productDescription">
          <div className="title">
            <h3>{data?.name.split(" ")[0]}</h3>
            <h1>{data?.name}</h1>
            <strong>{formatPrice(data?.price_in_cents) ?? 0}</strong>
          </div>
          
          <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$200,00.</p>
          
          <div className="description">
            <h3>DESCRIÇÃO</h3>
            <p>{data?.description}</p>
          </div>
          <button onClick={handleAddToCart}>
            <CartIcon />
            Adicionar ao carrinho
          </button>
        </div>
        
      </MainContainerProduct>
    </MainContainer>  
  )
} 
