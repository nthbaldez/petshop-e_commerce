"use client"

import { formatPrice } from "@/utils/formatPrice"
import { ChangeEvent } from "react"
import styled from "styled-components"
import { CartItemProps } from "@/types/productType"
import DeleteIcon from "./icons/DeleteIcon"


const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 210px;

  border-radius: 8px;
  background-color: white;
  
  position: relative;

  button {
    position: absolute;
    top: 16px;
    right: 24px;

    border: none;
    background: transparent;
    cursor: pointer;
  }

  img {
    max-height: 100%;
    width: 256px;
    border-radius: 8px 0 0 8px;
  }

`

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px 24px;
  line-height: 150%;
  color: var(--gray-600);
  
  h4 {
    font-weight: 300;
    font-size: 20px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    max-height: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-font-smoothing: antialiased;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;

    span {
      font-weight: 600;
      font-size: 16px;
      color: var(--gray-600);
    }
  }
`

const SelectQuantity = styled.select`
  padding: 8px;
  border: 1.5px solid var(--textos-dark);
  border-radius: 8px;
  background-color: var(--gray-200);
  color: var(--gray-400);
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  outline: none;
`

export default function CartItem({ product, handleUpdateQuantity, handleDelete } : CartItemProps){
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    handleUpdateQuantity(product.id, Number(e.target.value))
  }

  return(
    <Item>
      <img src={product.image_url} alt="imagem do produto `${product.name}`"/>
      <InfoContainer>
        <h4>{product.name}</h4>
        <button onClick={() => handleDelete(product.id)}>
          <DeleteIcon />
        </button>
        <p>{product.description}</p>
        
        <div>
          <SelectQuantity value={product.quantity} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </SelectQuantity>
          <span>{formatPrice(product.price_in_cents)}</span>
  
        </div>
      </InfoContainer>
    </Item>
  )
}
