"use client"

import styled from "styled-components"

export const DefaultPageLayout = styled.div`
  min-height: 100vh;
  padding: 12px 24px;
  background-color: var(--gray-100);
  width: 100%;
  @media (min-width: 768px) {
    padding: 2rem 10rem;
  }

  @media (min-width: 1440px) {
    padding: 2rem 20rem;
  }
`
