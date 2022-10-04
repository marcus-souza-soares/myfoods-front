import styled from "styled-components";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useAuth } from "../../Providers/AuthProvider";
import { useEffect, useState } from "react";
import { addFavorite, handleFavorite, removeFavorite } from "../../services/requests"

export function Revenue({ nome, imageURL, userId, id }) {
  // const defaulPicture = "https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg"
  const defaulPicture = "https://blog.myfitnesspal.com/wp-content/uploads/2017/12/Essential-Guide-to-Healthy-Eating-2.png";

  const { signed, errorMessage } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);

  const changeFavorite = () => {

    if (isFavorite) {
      removeFavorite(id).then((res) => {
        setIsFavorite(false);
      })

    } else {
      addFavorite(id).then(() => {
        setIsFavorite(true);
      })
    }
  }

  useEffect(() => {
    if (signed) {
      handleFavorite(id).then(res => {
        if (!!res.data) {
          setIsFavorite(true)
        } else {
          setIsFavorite(false);
        }
      }).catch(e => {
        errorMessage(e.response.data)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <img src={!imageURL ? defaulPicture : imageURL} alt={`${defaulPicture}.url`} />
      <div className="title">{nome}</div>
      <span onClick={changeFavorite}>{isFavorite ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}</span>
    </Container>
  )
}

const Container = styled.div`
  margin: 30px 8px;
  width: 220px;
  padding: 10px;
  border-radius: 8px;
  
  flex-wrap: wrap;
  position: relative;

  :hover {
    cursor: pointer;
    background: #c5c3c3;
    transition: background-color 0.5s;
  }
  :hover > img {
      filter: brightness(0.7);
      transition: filter 0.5s;
  }
  img {
    object-fit: cover;
    max-width: 100%;
    height: 142px;
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
  span{
    position: absolute;
    top: 12px;
    right: 12px;
  }
  svg {
    width: 25px;
    height: 25px;
    color: #FF470D;
  }
`