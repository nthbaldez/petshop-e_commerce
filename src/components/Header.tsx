'use client'

import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.25rem 10rem;
`

const Logo = styled.a`
  color: var(--blue-400);
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 103%;
`



export default function Header() {
  return (
    <HeaderContainer>
      <Logo>Pet Shop <span>Amigos do Johnny</span> </Logo>
      <div></div>
    </HeaderContainer>
  )
}
