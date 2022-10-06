import styled from "styled-components";
import { Search } from "./SearchInput";
import { UserIcon } from "./UserIcon";
import { useAuth } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sidebar } from "./SideBar";

export function Header() {
  const { userData } = useAuth();
  const [name, setName] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      setName(userData.name)
    }
  }, [userData])

  return (
    <Cotainer>
      {sidebar ? <Sidebar setSidebar={setSidebar}/> : ""}
      <h1 onClick={() => navigate("/home")}>MyFoods</h1>
      <Search />
      <div className="user">{!!userData ? <span className="desktop name">{`Bem vindo(a), ${name}`}
      </span> : <span><Link style={{ color: "#fff" }} to="/signin">Faça Login</Link></span>}
        <UserIcon  setSidebar={setSidebar} sidebar={sidebar}/>
      </div>
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
  z-index: 1;
  .user{
    display: flex;
    align-items: center;
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
  }
  .name{
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  h1 {
    font-family: 'Inspiration';
    margin-right: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    :hover {
      cursor: pointer;
    }
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
    .desktop {
      display: none;
    }
    h1 {
      font-size: 45px;
    }
    svg{
      width: 30px;
      height: 30px;
    }
  }
 
`