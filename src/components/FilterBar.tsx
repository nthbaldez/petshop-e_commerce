"use client"

import styled from "styled-components";
import FilterByType from "./FilterByType";
import FilterByPrice from "./FilterByPrice";

const FilterBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`

export default function FilterBar() {
  return (
    <FilterBarContainer>
      <FilterByType />
      <FilterByPrice />
    </FilterBarContainer>
  )
}
