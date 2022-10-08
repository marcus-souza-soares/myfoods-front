import { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../Components/Header/Header";
import { UploaderReact } from "../Components/uploaderImages";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Button from '@mui/material/Button';
import { useAuth } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { alert } from "../Helpers/alert";
import { createRevenue, getCategories } from "..//services/requests";
import { useRevenues } from "../Providers/revenuesProvider";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export function NewRevenue() {
  const { userData } = useAuth();

  //vars
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [ingrediente, setIngrediente] = useState("");
  const [preparoList, setPreparoList] = useState([]);
  const [preparo, setPreparo] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const { defaulPicture } = useRevenues();
  const [imageURL, setImageURL] = useState([defaulPicture]);

  //functions
  useEffect(() => {
    getCategories().then(res => {
      setCategoriesList([...res.data]);
    }).catch(e => {
      console.log(e.response);
    })
  }, []);

  const Cancel = () => {
    setIngrediente("")
    setIngredientes([])
    setImageURL([defaulPicture]);
    setPreparo("")
    setPreparoList("");
    setNome("")
    navigate("/home");
  }

  const Confirm = () => {
    if (
      preparoList.length < 1 ||
      ingredientes.length < 1 ||
      nome.length < 3 ||
      categoryName === ""
    ) {
      return alert('error', 'Não foi possível cadastrar essa receita!', 'Insira valores nos campos!');
    }
    if (!disabled) {
      setDisabled(true);
      const data = buildRevenue();
      createRevenue(data).then(res => {
        console.log(res.data);
        alert(
          'Good job!',
          'Receita cadastrada com sucesso!',
          'success');
        Cancel();
      }).catch(e => {
        console.log(e.response);
      }).finally(() => {
        setDisabled(false);
      });
    }
  }

  function buildRevenue() {
    let categoryId;

    categoriesList.forEach(c => {
      if (c.name === categoryName) categoryId = c.id;
    });

    return {
      nome,
      userId: userData.id,
      categoryId: categoryId,
      imageURL: imageURL[0].fileUrl || defaulPicture,
      secao: [
        {
          nome: "Ingredientes",
          conteudo: ingredientes
        }, {
          nome: "Modo de Preparo",
          conteudo: preparoList
        },
      ]
    }
  }


  return (
    <>
      <Header />
      <Container>
        <Top>
          <h1>Adicione uma foto: </h1>
          <UploaderReact setImageURL={setImageURL} />
        </Top>
        <Main>
          <div>
            <h1>Insira um nome: </h1>
            <div className="insert">
              <input
                type="text"
                onChange={e => setNome(e.target.value)}
                disabled={disabled}
                value={nome}
                required
              />
            </div>
          </div>
          <div className="ingredientes">
            <h1 >Ingredientes:</h1>
            <div className="insert">
              <input
                type="text"
                onChange={e => setIngrediente(e.target.value)}
                value={ingrediente}
                disabled={disabled}
                required
              />
              <div className="btns">
                <span className="check" onClick={() => {
                  setIngredientes([...ingredientes, ingrediente].reverse());
                  setIngrediente("");
                }}>
                  <AiOutlineCheckCircle />
                </span>
                <span className="cancel" onClick={() => setIngrediente("")}>
                  <AiOutlineCloseCircle />
                </span>
              </div>
            </div>
            <ul>
              {ingredientes.map((e, i) =>
                <li key={i}>
                  <h3>{e}</h3>
                </li>)}
            </ul>
          </div>
          <div className="preparo">
            <h1 >Modo de Preparo:</h1>
            <div className="insert">
              <input
                type="text"
                onChange={e => setPreparo(e.target.value)}
                value={preparo}
                disabled={disabled}
                required
              />
              <div className="btns">
                <span className="check" onClick={() => {
                  setPreparoList([...preparoList, preparo].reverse());
                  setPreparo("");
                }}>
                  <AiOutlineCheckCircle />
                </span>
                <span className="cancel" onClick={() => setPreparo("")}>
                  <AiOutlineCloseCircle />
                </span>
              </div>
            </div>
            <ul>
              {preparoList.map((c, i) =>
                <li key={i}>
                  <h3>{c}</h3>
                </li>)}
            </ul>
          </div>
          <div id="form-category">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Categorias</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => setCategoryName(e.target.value)}
              >
                {categoriesList.length > 0 ? categoriesList.map((c, i) =>
                  <span key={i}>
                    <FormControlLabel value={c.name} control={<Radio />} label={c.name} />
                  </span>
                ) : ""}
              </RadioGroup>
            </FormControl>
          </div>
        </Main>
        <div className="btn-options">
          <span onClick={Confirm}>
            <Button variant="contained" color="success" >
              Confirmar
            </Button>
          </span>
          <span onClick={Cancel}>
            <Button variant="contained" color="error">
              Cancelar
            </Button>
          </span>
        </div>
      </Container>
    </>
  )
}
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 65vw;
  flex-wrap: wrap;
  h1 {
    font-family: 'Kanit', sans-serif;
    font-size: 50px;
    margin: 20px 0;
  }
  
  ul {
    margin-left: 30px;
    list-style-type: disc;
  }
  
  input[type=text] {
    padding-left: 10px;
    min-width: 300px;
    max-width: 695px;
    width: 95%;
    height: 35px;
    background: #FFFFFF;
    box-shadow: inset 0px 2px 1px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
  .btn-options{
    margin: 86px 0;
  }
  .btn-options > span {
    margin: 0 10px;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    max-width: 100vw;
    padding: 0 20px;
    h1 {
      font-size: 32px;
    }
  }
`
const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 100%;
  z-index: 0;
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 15px;
  }
  h2{
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    margin: 12px 0;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 90vw;
    img {
      max-height: 278px;
    }
  }
`
const Main = styled.div`
  width: 100%;
  margin-bottom: 50px;

  #form-category{
    margin-top: 48px;
  }
  h3{
    margin: 10px 0;
    text-align: justify;
  }

  .insert{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  .btns{
    display: flex;
    flex-wrap: nowrap;
    padding: 0 10px;
    width: auto;
  }

  .check > svg{
    color: #229b12;
  }
  .cancel > svg{
    color: #df0c0c;
  }
  svg{
    margin: 0 5px;
    width: 31px;
    height: 31px;
    :hover{
      cursor: pointer;
      filter: brightness(0.6);
    }
  }
  @media screen and (max-width: 768px){
    width: 90vw;
  }
`