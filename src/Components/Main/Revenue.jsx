import styled from "styled-components";

export function Revenue({ nome, imageURL, userId, id }) {
  // const defaulPicture = "https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg"
  const defaulPicture = "https://blog.myfitnesspal.com/wp-content/uploads/2017/12/Essential-Guide-to-Healthy-Eating-2.png";
  return (
    <Container>
      <img src={!imageURL ? defaulPicture : imageURL} alt={`${defaulPicture}.url`} />
      <div className="title">{nome}</div>
    </Container>
  )
}

const Container = styled.div`
  margin: 30px 12px;
  width: 180px;
  flex-wrap: wrap;
  :hover {
    cursor: pointer;
  }
  img {
    object-fit: cover;
    width: 177px;
    height: 180px;
    border-radius: 10px;
  }
  .title{
    margin-top: 5px;
    font-family: 'Noto Sans',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
  }
  
`