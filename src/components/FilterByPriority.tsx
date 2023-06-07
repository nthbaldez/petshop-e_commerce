import styled from "styled-components"
import Arrow from "./icons/Arrow"
import { useState } from "react";

const FilterByPriorityContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    font-size: 1.2rem;
    color: var(--gray-500);
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 22px;
    cursor: pointer;

    background: transparent;
    border: none;

    svg {
      margin-left: 16px;
    }
  }
`

const FilterByPriorityList = styled.ul`
  position: absolute;
  width: 178px;
  height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  
  background: var(--white);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 12px 16px;
  z-index: 999;
  top: 100%;

  li {
    font-size: 14px;
    color: var(--gray-500);
    font-weight: 400;
    line-height: 22px;
  }

  li + li {
    margin-top: 4px;
  }

`

export default function FilterByPriority() {

  const [ listIsOpen, setListIsOpen ] = useState(false);

  return (
    <FilterByPriorityContainer>
      <button onClick={() => setListIsOpen(prev => !prev)}>
        Organizar por
        <Arrow />
      </button>

      { listIsOpen && 
        <FilterByPriorityList>
          <li>Novidades</li>
          <li>Preço: Maior - menor</li>
          <li>Preço: Menor - maior</li>
          <li>Mais vendidos</li>
        </FilterByPriorityList>
      }
    </FilterByPriorityContainer>
  )
}
