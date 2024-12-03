import { useFilter } from "@/hooks/useFilter"
import { FilterTypes } from "@/types/filterTypes"
import styled from "styled-components"

interface FilterLIProps {
  selected: boolean
}

const FilterByTypeList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 2.5rem;
  list-style-type: none;
`

const FilterLI = styled.li<FilterLIProps>`
  font-family: inherit;
  font-style: normal;
  font-weight: ${props => props.selected ? '600' : '400'};
  font-size: 1rem;
  line-height: 22px;
  padding: 4px;

  text-align: center;
  text-transform: uppercase;

  border-bottom: ${props => props.selected ? '4px solid var(--blue-400)' : 'none'};
  cursor: pointer;
`

export default function FilterByType() {

  const { type, setType } = useFilter();

  const handleChangeType = (typeValue: FilterTypes) => {
    setType(typeValue);
  }

  return (
    <div>
      <FilterByTypeList>
        <FilterLI selected={type === FilterTypes.ALL} onClick={() => handleChangeType(FilterTypes.ALL)}>TODOS OS PRODUTOS</FilterLI>
        <FilterLI selected={type === FilterTypes.DOGS} onClick={() => handleChangeType(FilterTypes.DOGS)}>CACHORROS</FilterLI>
        <FilterLI selected={type === FilterTypes.CATS} onClick={() => handleChangeType(FilterTypes.CATS)}>GATOS</FilterLI>
      </FilterByTypeList>
    </div>
  )  
} 
