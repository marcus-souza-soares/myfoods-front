import styled from "styled-components";
import { useRevenues } from "../../Providers/revenuesProvider"
import { Revenue } from "./Revenue";
import Loading from "../Loading";
import { MdAddCircle } from "react-icons/md";
import { useAuth } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function RevenuesList({ revenues }) {
  const { loading } = useRevenues();
  const { signed } = useAuth()

  const Render = () => {

    if (loading) {
      return <Loading />
    } else if (revenues.length === 0){
      return <div>Sorry... Não foram encontradas receitas nessa rota!</div>
    } else {
      return revenues.reverse().map((r, i) => (
        <div key={i}>
          <Revenue
            nome={r.nome}
            imageURL={r.imageURL}
            userId={r.userId}
            id={r.id}
          />
        </div>
      ))
    }
  }
  return (
    <Container>
      <Render />
      {signed ?
        <div className="add-revenue">
          <Link to="/revenue/new">
            <MdAddCircle />
          </Link>
        </div> : ""}
    </Container>
  )
}

const Container = styled.main`
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 65vw;
  .add-revenue{
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    svg {
      width: 50px;
      height: 50px;
      color: #FF470D;
    }
    :hover{
      cursor: pointer;
    }
    :hover > svg {
      filter: brightness(0.7);
    }
  }
  @media screen and (max-width: 768px){
    max-width: 90vh;
  }
`