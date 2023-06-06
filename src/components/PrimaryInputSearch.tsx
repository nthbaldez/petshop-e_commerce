import styled from "styled-components";
import SearchIcon from "./icons/SearchIcon";

const InputContainer = styled.div`
  width: 24rem;
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

  padding: 10px 16px;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`


export default function PrimaryInputSearch() {
  return (
    <InputContainer>
      <PrimaryInput placeholder="Procurando por algo específico?"/>
      <SearchIcon />
    </InputContainer>
  )
}
