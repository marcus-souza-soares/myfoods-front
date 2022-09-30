import styled from "styled-components";
import { Search } from "./SearchInput";
import { UserIcon } from "./UserIcon";

export function Header() {
  return (
    <Cotainer>
      <h1>MyFoods</h1>
      <Search />
      <UserIcon />
    </Cotainer>
  )
}
const Cotainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  width: 100vw;
  height: 70px;
  left: 0px;
  top: 0px;
  background: #FF470D;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 8px 8px;

  h1 {
    font-family: 'Inspiration';
    margin-right: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  svg {
    margin: 0 10px;
    width: 40px;
    height: 40px;
    color: #fff;
    :hover{
      cursor: pointer;
      transform: translateY(-5px);
    }
  }
  @media screen and (max-width: 768px){ 
    h1 {
      font-size: 45px;
    }
    svg{
      width: 30px;
      height: 30px;
    }
  }
 
`