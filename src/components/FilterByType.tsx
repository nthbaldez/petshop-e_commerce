import styled from "styled-components"

interface FilterLIProps {
  selected: boolean
}

const FilterByTypeList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

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
`


export default function FilterByType() {
  return (
    <div>
      <FilterByTypeList>
        <FilterLI selected>TODOS OS PRODUTOS</FilterLI>
        <FilterLI selected={false}>CACHORROS</FilterLI>
        <FilterLI selected={false}>GATOS</FilterLI>
      </FilterByTypeList>
    </div>
  )  
} 
