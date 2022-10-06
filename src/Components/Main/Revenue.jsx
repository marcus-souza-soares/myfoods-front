import styled from "styled-components";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useAuth } from "../../Providers/AuthProvider";
import { useEffect, useState } from "react";
import { addFavorite, handleFavorite, removeFavorite } from "../../services/requests"
import { useNavigate } from "react-router-dom";
import { useRevenues } from "../../Providers/revenuesProvider";

export function Revenue({ nome, imageURL, id }) {
  
  const {defaulPicture} = useRevenues();
  const navigate = useNavigate()
  const { signed, errorMessage, logout } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);

  const changeFavorite = () => {
    if(signed){
      if (isFavorite) {
        removeFavorite(id).then((res) => {
          console.log(res)
          setIsFavorite(false);
        }).catch(e => {
          errorMessage(e.response.data);
        })
  
      } else {
        addFavorite(id).then(() => {
          setIsFavorite(true);
        }).catch(e => {
          errorMessage(e.response.data);
        })
      }
    } else {
      logout();
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
        errorMessage(e.response.data);
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signed]);

  return (
    <Container >
      <img src={!imageURL ? defaulPicture : imageURL} alt={`${defaulPicture}.url`} onClick={() => navigate(`/revenue/${id}`)}/>
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