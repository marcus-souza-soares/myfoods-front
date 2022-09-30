import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Loading from "../Components/Loading";

export function SigUp() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState('');
  const [password01, setPassword01] = useState('');
  const [password02, setPassword02] = useState('');
  const [loading, setLoading] = useState(false)
  const [desativado, setDesativado] = useState(false);

  const cadastrar = e => {
    e.preventDefault();
    const validaNome = /^[a-zA-Z]{3,}/;
    const validaEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/;
    const validaSenha = /^[0-9a-zA-Z$*&@#]{6,}$/;

    if (!validaNome.test(nome)) {
      return alert("Nome inválido")
    }
    if (!validaEmail.test(email)) {
      return alert('E-mail inválido!');
    }
    if (!validaSenha.test(password01)) {
      return alert('Senha inválida! Mínimo de 6 caracteres.');
    }
    if (password01 !== password02) {
      return alert("As senhas se diferem!")
    }
    const body = {
      name: nome,
      email,
      password: password01,
      confirmPassword: password02
    }

    setDesativado(true);
    setLoading(true);

    const promise = axios.post("http://localhost:5000/register", body);
    promise.then(res => {
      console.log(res.data);
      navigate('/signin');
    });
    promise.catch(error => {
      alert(error.response.data);
    }).finally(() => {
      setLoading(false);
      setDesativado(false);
    });
  }


  return (
    <div className="default">
      <Container>
        <header>
          <img src="imgs/logo.png" alt="logo.png" />
          <h1>MyFoods</h1>
        </header>
        <form onSubmit={cadastrar}>
          <input
            type="test"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            disabled={desativado}
            required />
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={desativado}
            required />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword01(e.target.value)}
            value={password01}
            disabled={desativado}
            required />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword02(e.target.value)}
            value={password02}
            disabled={desativado}
            required />
          <button type="submit" disabled={desativado}>{loading ? <Loading></Loading> : 'Cadastrar'}</button>
        </form>
        <Link to={"/signin"} style={{ textDecoration: 'none' }}>
          <h3>Já tem uma conta? Entre agora!</h3>
        </Link>
      </Container>
    </div>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 500px;
    
    header{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }
    header > img {
        width: 300px;
        height: 300px;
    }
    
    h1{
        font-family: 'Inspiration', cursive;
        font-weight: 400;
        font-size: 100px;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 10px;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    input{
        width: 100%;
        font-family: "Raleway", sans-serif;
        padding-left: 15px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
        margin: 0 20px;
        margin-bottom: 15px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        ::placeholder{
            font-weight: 400;
            font-size: 18px;
            color: #000000;
        }
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        width: 250px;
        height: 50px;
        background: #D90E0E;
        border: 1px dashed #000000;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        font-family: 'Nunito Sans';
        font-size: 24px;
        color: #FFFFFF;
        :hover {
            cursor: pointer;
            transform: translateY(-5px) ;
        }
    }

    h3{
        margin: 40px 0;
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        text-decoration-line: underline;
        color: #FFFFFF;
        letter-spacing: 0.11em;
        :hover{
          cursor: pointer;
        }
    }
    
`