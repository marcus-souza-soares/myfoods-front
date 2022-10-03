import styled from "styled-components";
import { Revenue } from "./Revenue";

export function RevenuesList({ revenues }) {
  console.log(revenues);

  return (
    <Container>
      {revenues.map((r, i) => (
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