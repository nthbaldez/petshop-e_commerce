import styled from "styled-components"
import Arrow from "./icons/Arrow"
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priorityTypes";

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
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }

`

export default function FilterByPriority() {

  const { setPriority } = useFilter();
  const [ listIsOpen, setListIsOpen ] = useState(false);

  const handleChangePriority = (priorityValue: PriorityTypes) => {
    setPriority(priorityValue);
    setListIsOpen(prev => !prev);
  }

  return (
    <FilterByPriorityContainer>
      <button onClick={() => setListIsOpen(prev => !prev)}>
        Organizar por
        <Arrow />
      </button>

      { listIsOpen && 
        <FilterByPriorityList>
          <li onClick={() => handleChangePriority(PriorityTypes.NEWS)}>Novidades</li>
          <li onClick={() => handleChangePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
          <li onClick={() => handleChangePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
          <li onClick={() => handleChangePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
        </FilterByPriorityList>
      }
    </FilterByPriorityContainer>
  )
}
