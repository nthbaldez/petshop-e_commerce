'use client'

import styled from 'styled-components';
import PrimaryInputSearch from './PrimaryInputSearch';
import CartControl from './CartControl';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;
  background-color: var(--blue-600);
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
  font-size: 2.5rem;
  line-height: 103%;

  span {
    color: var(--white);
  }
`

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>Pet Shop <br></br><span>Amigos do Johnny</span></Logo>
      <SearchAndCartContainer>
        <PrimaryInputSearch/>
        <CartControl />
      </SearchAndCartContainer>
    </HeaderContainer>
  )
}
