import styled from "styled-components";
import { useRevenues } from "../../Providers/revenuesProvider"
import { Revenue } from "./Revenue";
import Loading from "../Loading"

export function RevenuesList({ revenues }) {
  const { loading } = useRevenues();
  return (
    <Container>
      {loading ? <Loading ></Loading> : revenues.map((r, i) => (
        <div key={i}>
          <Revenue
            nome={r.nome}
            imageURL={r.imageURL}
            userId={r.userId}
            id={r.id}
          />
        </div>
      ))}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 65vw;
  @media screen and (max-width: 768px){
    max-width: 90vh;
  }
`