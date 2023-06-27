'use client'

import styled from 'styled-components';
import PrimaryInputSearch from './PrimaryInputSearch';
import CartControl from './CartControl';
import { useFilter } from '@/hooks/useFilter';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 24px;
  background-color: var(--blue-600);


  @media (min-width: 768px) {
    padding: 2rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1440px) {
    padding: 2rem 20rem;
  }

  
`

const SearchAndCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 24px;
`

const Logo = styled.a`
  color: var(--blue-400);
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 103%;

  span {
    color: var(--white);
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`

export default function Header() {

  const { search, setSearch } = useFilter()
  return (
    <HeaderContainer>
      <Logo href="/">Pet Shop <br></br><span>Amigos do Johnny</span></Logo>
      <SearchAndCartContainer>
        <PrimaryInputSearch
          value={search}
          handleChange={setSearch} 
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </SearchAndCartContainer>
    </HeaderContainer>
  )
}
