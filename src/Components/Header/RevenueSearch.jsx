import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRevenues } from "../../Providers/revenuesProvider";

export function RevenueSearch({ name, picture, id }) {
  const { defaulPicture } = useRevenues();
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/revenue/" + id)}>
      <Picture>
        <img src={picture} alt={defaulPicture} />
      </Picture>
      <Text>
        <h2>{name}</h2>
      </Text>
    </Container>
  )
}

const Container = styled.div`
  width: auto;
  display: flex;
  margin: 5px 6px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 0 5px;

  :hover{
    filter: brightness(0.5);
    background-color: #f7f3f361;
    transition: background-color 0.3s;
    cursor: pointer;
  }

  h2 {
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
 
`
const Picture = styled.span`
  img{
    width: 150px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
  }

`
const Text = styled.span`
  display: flex;
  text-align: right;
  max-width: 50%;
`