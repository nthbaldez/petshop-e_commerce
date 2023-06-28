"use client"

import styled from "styled-components";
import SearchIcon from "./icons/SearchIcon";
import { InputHTMLAttributes } from "react";

const InputContainer = styled.div`
  width: 250px;
  position: relative;
  
  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
  }

  @media(min-width: ${props => props.theme.desktopBreakpoint}){
    width: 352px;
  }

`
const PrimaryInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;

  padding: 10px 15px;
  font-family: inherit;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 20px;

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 14px;
  }

`
interface InputPrimaryProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export default function PrimaryInputSearch(props: InputPrimaryProps) {
  return (
    <InputContainer>
      <PrimaryInput onChange={(event) => {props.handleChange(event.target.value)}} {...props}/>
      <SearchIcon />
    </InputContainer>
  )
}
