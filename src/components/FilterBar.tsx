"use client"

import styled from "styled-components";
import FilterByType from "./FilterByType";
import FilterByPriority from "./FilterByPriority";

const FilterBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export default function FilterBar() {
  return (
    <FilterBarContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterBarContainer>
  )
}
