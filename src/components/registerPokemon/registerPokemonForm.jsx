import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { UserContext } from '../../contexts/userContext.jsx';
import apiModels from '../../services/apiModels.js';
import { useNavigate } from 'react-router-dom';


function RegisterPokemonForm() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [diaria, setDiaria] = useState('');
  const [foto, setFoto] = useState('');
  const [comentarioFoto, setComentarioFoto] = useState('');
  const [especie, setEspecie] = useState('');

  const {user} = useContext(UserContext);
  const nav = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    const valor = (Number(diaria).toFixed(2))*100;
    apiModels.postModel({nome,descricao,diaria:valor,foto,comentarioFoto,especie},user.token)
    .then((resp)=>{
      nav(`/pokemon/${resp.data.id}`);
      
    })
    .catch((err)=>{
      console.log(err.response.data);
    });
  }

  return (
    <Container>
      <TitleText>Registrar novo pokemon:</TitleText>
      <Form onSubmit={(e)=>handleSubmit(e)}>
        <Label>Nome:</Label>
        <Input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <Label>Espécie:</Label>
        <Input
          type="text"
          value={especie}
          onChange={(e) => setEspecie(e.target.value)}
          required
        />

        <Label>Descrição:</Label>
        <TextArea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />

        <Label>Preço da Diária:</Label>
        <Input
          type="number"
          step="0.01"
          value={diaria}
          onChange={(e) => setDiaria(e.target.value)}
          required
        />

        <Label>Foto do  seu pokemon:</Label>
        <Input
          type="text"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
          required
          />

        <Label>Comentário da Foto:</Label>
        <Input
          type="text"
          value={comentarioFoto}
          onChange={(e) => setComentarioFoto(e.target.value)}
          required
        />

        <Centralizado>
          <Button type="submit" >Registrar!</Button>
        </Centralizado>

      </Form>
    </Container>
  );
}

export default RegisterPokemonForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5vh;
  background-color: white;
  width: 57vw;
  display: flex;
  padding: 1vh;
  @media (max-width: 1024px) {
    width: 72vw;
  }
  @media (max-width: 768px) {
        width: 86vw;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-left: 1vw;
  font-size: 2vh;
`;

const Input = styled.input`
  width: 50vw;
  padding: 8px;
  margin-left: 2vw;
  @media (max-width: 1024px) {
    width: 67vw;
  }
  @media (max-width: 768px) {
    width: 78vw;
    height: 5vh;
    padding: 0.5vh;
  }
`;

const TextArea = styled.textarea`
  padding: 8px;
  max-width: 50vw;
  height: 10vh;
  max-height: 10vh;
  margin-left: 2vw;
  font-size: 2vh;
  color: #333;
  @media (max-width: 1024px) {
    max-width: 67vw;
  }
  @media (max-width: 768px) {
    max-width: 78vw
  }
`;

const Button = styled.button`
  background-color:#be1010;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 30vw;
  margin-bottom: 1vh;
  border-radius: 1vw;
  font-weight: 700;
`;

const Centralizado = styled.div`
  display: flex;
  justify-content: center;
`
const TitleText = styled.div`
  font-size: 4vh;
  margin-bottom: 1vh;
  color: #444;
  font-weight: 800;
  text-decoration: underline;
  padding: 1vh;
  border-radius: 0.5vh;

  @media (max-width: 768px) {
    font-size: 3vh;
  }
`