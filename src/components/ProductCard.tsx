import styled from "styled-components";


interface ProductCardProps {
  name: string;
  id: string;
  imageURL: string;
  price: number;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 378px;
`

export function ProductCard(props: ProductCardProps) {
  return (
    
  )
}
