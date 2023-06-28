"use client"

import styled from "styled-components"
import BackArrow from "./icons/BackArrow";
import { useRouter } from "next/navigation";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;

  color: var(--gray-400);
`

interface BackButtonProps {
  navigate: string;
}

export default function BackButton({ navigate }: BackButtonProps) {
  const router = useRouter();

  function handleNavigate() {
    router.push(navigate);
  }

  return (
    <Button onClick={handleNavigate}>
      <BackArrow />
      Voltar
    </Button>
  )
}
