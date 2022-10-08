import styled from "styled-components";
import { Search } from "./SearchInput";
import { UserIcon } from "./UserIcon";
import { useAuth } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sidebar } from "../SideBar/SideBar";
import { RevenueSearch } from "./RevenueSearch";

export function Header() {
  const { userData } = useAuth();
  const [name, setName] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const [searchList, setSearchList] = useState([]);
  const [displayStatus, setDisplayStatus] = useState('none');

  useEffect(() => {
    if (userData) {
      setName(userData.name)
    }
  }, [userData])

  return (
    <Container displayStatus={displayStatus}>
      {sidebar ? <Sidebar setSidebar={setSidebar} /> : ""}
      <h1 onClick={() => navigate("/home")}>MyFoods</h1>
      <Search
        searchList={searchList}
        setSearchList={setSearchList}
        displayStatus={displayStatus}
        setDisplayStatus={setDisplayStatus}

      />
      <div className="user">{!!userData ? <span className="desktop name">{`Bem vindo(a), ${name}`}
      </span> : <span><Link style={{ color: "#fff" }} to="/signin">Faça Login</Link></span>}
        <UserIcon setSidebar={setSidebar} sidebar={sidebar} />
      </div>
      <div className="list">
        {searchList.length > 0 ? searchList.map((e, i) => {
          return <RevenueSearch 
                    name={e.nome} 
                    picture={e.imageURL} 
                    key={i} 
                    id={e.id}
                  />
        }) : ""}
      </div>
    </Container>
  )
}
const Container = styled.div`
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

  .list{
    min-width: 350px;
    width: 45vw;
    position: absolute;
    top: 70px;
    margin: 0 auto;
    background-color: #FFFFFF;
    display: ${props => props.displayStatus};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    left: 50%;
    margin-left: -25%;
    box-shadow: 1px 1px 5px #494545;
  }
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
    .list{
      left: 10px;
      right: 10px;
      margin-left: 0;
      width: auto;
    }
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