import { useEffect, useState } from "react";
import styled from "styled-components";
import { getRevenueById, getUserById } from "../services/requests";
import { Header } from "../Components/Header/Header"
import { useParams } from "react-router-dom";
import { useRevenues } from "../Providers/revenuesProvider";

export function RevenuePage() {
  const [revenue, setRevenue] = useState({});
  const { id } = useParams();
  const { defaulPicture } = useRevenues();
  const [criator, setCriator] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [preparo, setPreparo] = useState([])

  useEffect(() => {
    getRevenueById(id).then(res => {
      setRevenue(res.data)
      setIngredientes(res.data.secao[0].conteudo);
      setPreparo(res.data.secao[1].conteudo)
      console.log(res.data)
    }).catch(e => {
      console.log(e.response);
    });

  }, [id]);

  getUserById(revenue.userId).then(res => {
    console.log(res.data)
    setCriator(res.data.name);
  }).catch(e => {
    console.log(e.response.data);
  });

  const Render = () => {
    if (revenue) {
      return (
        <>
          <Top>
            <h1>{revenue ? revenue.nome : ""}</h1>
            <h2>{`Feito por: ${criator}`}</h2>
            <img src={revenue.imageURL ? revenue.imageURL : defaulPicture} alt="logo.png" />
          </Top>
          <Main>
            <h1 className="ingredientes">Ingredientes:</h1>
            {ingredientes.length > 0 ?
              <ul>{ingredientes.map((e, i) =>
                <li key={i}>
                  <h3>{e}</h3>
                </li>)}
              </ul> : ""}
            <h1>Modo de preparo:</h1>
            {preparo.length > 0 ?
              <ul>{preparo.map(e =>
                <li>
                  <h3>{e}</h3>
                </li>)}
              </ul> : ""}
          </Main>
        </>
      )
    }

    return (
      <div>
        <h1>Não encontramos essa receita!</h1>
      </div>
    )
  }
  return (
    <>
      <Header />
      <Container>
        <Render />
      </Container>
    </>
  )
}
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 65vw;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    height: 100%;
    max-width: 100vw;
    padding: 0 20px;
    h1 {
      font-size: 32px;
    }
  }
  h1 {
    font-family: 'Kanit', sans-serif;
    font-size: 50px;
    margin: 20px 0;
  }
  ul {
    margin-left: 30px;
    list-style-type: disc;
  }
  h3{
    margin: 10px 0;
    text-align: left;
    line-height: 25px;
  }
`
const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 100%;
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 15px;
  }
  h2{
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    margin: 12px 0;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 90vw;
    img {
      max-height: 278px;
    }
  }
`
const Main = styled.div`
  width: 100%;
  margin-bottom: 50px;
  @media screen and (max-width: 768px){
    width: 90vw;
  }
`