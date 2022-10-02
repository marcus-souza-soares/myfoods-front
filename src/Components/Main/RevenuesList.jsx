import styled from "styled-components";

export function RevenuesList({ revenues }) {
  console.log(revenues)
  return (
    <Container>
      {revenues.map((r, i) => <div key={i}>{r.nome}</div>)}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`