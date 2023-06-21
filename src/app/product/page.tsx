"use client"

import BackArrow from '@/components/icons/BackArrow';
import CartIcon from '@/components/icons/CartIcons';
import Link from 'next/link';
import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  padding: 2rem 10rem;

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

export default function Product() {
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
          <img src="https://images.petz.com.br/fotos/1669738862596.jpg" alt="" />
        </div>
        <div className="productDescription">
          <div className="title">
            <h3>Moletom</h3>
            <h1>Moletom para cães</h1>
            <strong>R$ 40,00</strong>
          </div>
          
          <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
          
          <div className="description">
            <h3>DESCRIÇÃO</h3>
            <p>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
          </div>
          <button>
            <CartIcon />
            Adicionar ao carrinho
          </button>
        </div>
        
      </MainContainerProduct>
    </MainContainer>  
  )
} 
