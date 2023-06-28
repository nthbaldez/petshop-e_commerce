"use client"

import BackButton from "@/components/BackButton";
import { DefaultPageLayout } from "@/components/DefaultPageLayout";
import styled from "styled-components";

const DivWrapper = styled.div`
  display: grid;
  grid-template-columns: 46rem 22rem;
  gap: 2rem;
`

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  header {
    margin-top: 1.38rem;

    h1 {
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
  
  div {
    width: 46rem;
    height: 13.1875rem;
    border-radius: 8px;
    background: var(--white);

    display: grid;
    grid-template-columns: 16rem 1fr;

    img {
      width: 16rem;
      height: 13.1875rem;
    }

    div {
      display: flex;
      flex-direction: column;
      padding: 1rem 1.5rem;
      header {
        display: flex;
        justify
      }
    }
  }
`

const AsideContainer = styled.aside`
  background-color: var(--white);
`

export default function Cart() {
  return (
    <DefaultPageLayout>
      <DivWrapper>
        <MainContainer>
          <BackButton navigate="/"/>
          <header>
            <h1>Seu Carrinho</h1>
            <p>Total (3 produtos) <strong>R$161,00</strong></p>
          </header>

          <div>
            <img src="https://images.petz.com.br/fotos/1669738862596.jpg" alt="" />
            <div>
              <header>
                Brinquedo Chalesco
              </header>
            </div>
          </div>
        </MainContainer>

        <AsideContainer>
          <div>
            <h2>Resumo do pedido</h2>
          </div>
        </AsideContainer>
      </DivWrapper>
    </DefaultPageLayout>
  )
}
