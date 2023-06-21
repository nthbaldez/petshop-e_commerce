import { formatDescription } from "@/utils/formatDescription";
import { formatPrice } from "@/utils/formatPrice";
import styled from "styled-components";
import { Link, Tooltip } from '@chakra-ui/react'

interface ProductCardProps {
  name: string;
  id: string;
  imageURL: string;
  price: number;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  height: 350px;
  background: var(--blue-500);
  border-radius: 8px;
  backdrop-filter: blur(10px);

  img {
    border-radius: 8px 8px 0px 0px;
    height: 300px;
    width: 256px;
  }

  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: var(--white);

    &:hover {
      cursor: pointer;
    }
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--blue-600);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0;

    > div {
      width: 228px;
      height: 1px;
      margin: 8px 0;
      padding: 0px;
      background: var(--white);
    }
  }

  
`

export function ProductCard({price, name, imageURL, id}: ProductCardProps) {
  const priceFormatted = formatPrice(price);
  const nameFormatted = formatDescription(name);

  return (
    <Link 
      href="/product"
    >
      <Card>
      <img src={imageURL} alt={name} />
        <div>
          <Tooltip label={name} placement='top' bg='gray' color='white' hasArrow>
            <h3>{nameFormatted}</h3>
          </Tooltip>
          <div></div>
          <p>{priceFormatted}</p>
        </div>
      </Card>
    </Link>
  )
}
