import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCategories, getRevenuesByCategories } from "../services/requests";
import { FaPizzaSlice } from "react-icons/fa";
import { FaCandyCane } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";
import { FaCarrot } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useRevenues } from "../Providers/revenuesProvider";

export function Categories() {
  const hashTable = {
    Massas: <FaPizzaSlice />,
    Doces: <FaCandyCane />,
    Fitness: <FaCarrot />,
    Bebidas: <BiDrink />,
    Salgados: <FaHamburger />
  }
  const navigate = useNavigate();
  const { setRevenues } = useRevenues();

  function Category({ name, icon, categoryId }) {
    const handleCategory = () => {
      getRevenuesByCategories(categoryId).then(res => {
        setRevenues(res.data);
        console.log(res.data)
        navigate("/category");
      });
    }

    return <div onClick={handleCategory}><span>{`${name} `}</span>{icon}</div>
  }

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then(res => {
      setCategories([...res.data])
    }).catch(e => {
      alert(e.response)
    })
  }, [])

  return (
    <Container>
      {categories.map((c, i) => {
        return <Category
          key={i}
          name={c.name}
          icon={hashTable[c.name]}
          categoryId={c.id}
        />
      }
      )}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 80px;
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 20px;
    width: 115px;
    height: 41px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 0 10px;
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    :hover{
      cursor: pointer;
      transform: translateY(-5px);
    }
    svg{
      color: #FF470D;
    }
  }
`