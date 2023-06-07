"use client"

import styled from "styled-components";
import SearchIcon from "./icons/SearchIcon";
import { InputHTMLAttributes } from "react";

const InputContainer = styled.div`
  width: 22rem;
  position: relative;
  
  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
  }

`
const PrimaryInput = styled.input`
  width: 100%;
  border-radius: 6px;
  border: none;

  padding: 10px 15px;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`
interface InputPrimaryProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function PrimaryInputSearch(props: InputPrimaryProps) {
  return (
    <InputContainer>
      <PrimaryInput {...props}/>
      <SearchIcon />
    </InputContainer>
  )
}
