import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCategories, getRevenues, getRevenuesByCategories } from "../services/requests";
import { FaPizzaSlice } from "react-icons/fa";
import { FaCandyCane } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";
import { FaCarrot } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useRevenues } from "../Providers/revenuesProvider";
import { AiFillHome } from "react-icons/ai";

export function Categories() {
  const hashTable = {
    Massas: <FaPizzaSlice />,
    Doces: <FaCandyCane />,
    Fitness: <FaCarrot />,
    Bebidas: <BiDrink />,
    Salgados: <FaHamburger />,
    Todas: <AiFillHome />
  }

  const navigate = useNavigate();
  const { setRevenues, setLoading } = useRevenues();

  function Category({ name, icon, categoryId }) {
    const [color, setColor] = useState("#fff");

    const handleCategory = () => {
      console.log(color)
      setLoading(true)
      if (name === "Todas") {
        getRevenues().then(res => {
          setRevenues(res.data);
          setLoading(false);
          
        }).catch(e => {
          alert(e.response);
        })
        return navigate("/home");
      }
      setColor("#e2730b");
      getRevenuesByCategories(categoryId).then(res => {
        setRevenues(res.data);
        setLoading(false);
        navigate("/category");
      }).catch(e => {
        alert(e.response);
      });
    }

    return  <CategoryDiv onClick={handleCategory} color={color}>
              <span>{`${name} `}</span>
              {icon}
            </CategoryDiv>
  }

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then(res => {
      setCategories([...res.data, {
        name: "Todas"
      }])
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

`
const CategoryDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 20px;
    width: 115px;
    height: 41px;
    background: ${props => props.color};
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

`