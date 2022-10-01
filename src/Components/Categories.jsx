import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCategories } from "../services/requests";
import { FaPizzaSlice } from "react-icons/fa";
import { FaCandyCane } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";
import { FaCarrot } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";

export function Categories() {
  const hashTable = {
    Massas: <FaPizzaSlice />,
    Doces: <FaCandyCane />,
    Fitness: <FaCarrot />,
    Bebidas: <BiDrink />,
    Salgados: <FaHamburger />
  }

  function Category({ name, icon }) {
    return <div><span>{`${name} `}</span>{icon}</div>
  }

  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then(res => {
      setCategories([...res.data])
      console.log(categories)
    })
  }, [])

  return (
    <Container>
      {categories.map(c => {
        return <Category name={c.name} icon={hashTable[c.name]} />
      }
      )}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 70px;
  background-color: inherit;
  display: flex;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
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