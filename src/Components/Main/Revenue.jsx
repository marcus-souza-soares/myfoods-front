import styled from "styled-components";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useAuth } from "../../Providers/AuthProvider";
import { useEffect, useState } from "react";
import { handleFavorite } from "../../services/requests"

export function Revenue({ nome, imageURL, userId, id }) {
  // const defaulPicture = "https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg"
  const defaulPicture = "https://blog.myfitnesspal.com/wp-content/uploads/2017/12/Essential-Guide-to-Healthy-Eating-2.png";

  const { setUserData, userData, signed } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (signed) {
      handleFavorite({ revenueId: id, userId: userData.id }).then(res => {
        if (!!res.data) {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      }).catch(e => {
        alert(e.response);
      })
    }
  }, []);

  return (
    <Container>
      <img src={!imageURL ? defaulPicture : imageURL} alt={`${defaulPicture}.url`} />
      <div className="title">{nome}</div>
      <span>{isFavorite ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}</span>
    </Container>
  )
}

const Container = styled.div`
  margin: 30px 12px;
  width: 210px;
  flex-wrap: wrap;
  position: relative;
  :hover {
    cursor: pointer;
  }
  img {
    object-fit: cover;
    max-width: 100%;
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
    top: 10px;
    right: 7px;
  }
  svg {
    width: 25px;
    height: 25px;
    color: #FF470D;
  }
`