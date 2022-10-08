import styled from "styled-components";
import { GiTomato } from "react-icons/gi";
import { MdFavorite, MdLogout, MdClose } from "react-icons/md";
import { useAuth } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export function Sidebar({ setSidebar }) {

  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <div className="close" onClick={() => setSidebar(false)}>
          <MdClose />
        </div>
        <div className="option" onClick={() => navigate("/myrevenues")}>
          <span>Minhas Receitas</span>
          <GiTomato />
        </div>
        <div className="option" onClick={() => navigate("/favorites")}>
          <span>Favoritas</span>
          <MdFavorite />
        </div>
        <div className="option" onClick={logout}><span>Sair</span><MdLogout /></div>
      </Container>
      <Overlay onClick={() => setSidebar(false)} />
    </>
  )
}
const Container = styled.div`
  padding-top: 20px;
  background: #FF470D;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 275px;
  z-index: 2;
  .close {
    margin-bottom: 150px;
  }

  .option{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-top: 1px solid #fff;
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 19px;
    
    color: #fff;
    :hover {
      cursor: pointer;
      background: #e43804;
    }
  }
`
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.1);
`