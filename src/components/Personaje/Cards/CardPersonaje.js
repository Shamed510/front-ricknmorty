import React from 'react';
import styled from 'styled-components';

/* Style Components */

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border: 4px solid #fff;
  border-radius: 10px;
  background-color: #0041ab;
  font-family: 'Arial', sans-serif;
  width: 100%;
  box-sizing: border-box;
  flex-direction: row;
  box-shadow: 0 10px 6px rgba(0, 0, 0, 0.1);
  padding: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  margin-right: 20px;
  margin-left: 20px;
  width: 100%;
  height: auto;
  max-width: 300px;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin: 0;
    max-width: 100%;
  }
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 40px;
  text-transform: uppercase;
  font-family: Ink Free;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 20px;
  }
`;

const Info = styled.p`
  margin: 10px;
  font-weight: bold;
  font-size: 24px;
  font-family: Consolas;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

function CardPersonaje(props) {

  const NAME = props.character.name;
  const ID = props.character.id;
  const IMG = props.character.image;
  const ESTATUS = props.character.status;
  const RAZA = props.character.species;
  const TIPO = props.character.type;
  const GENERO = props.character.gender;
  const ORIGEN = props.character.origin.name;
  const LOCATION = props.character.location.name;

  return (
    <Card>
      <div>
        <Image src={IMG} alt={NAME} />
        <Name>{NAME}</Name>
      </div>
      <div>
        <Info>ID: {ID}</Info>
        <Info>Estatus: {ESTATUS}</Info>
        <Info>Raza: {RAZA}</Info>
        <Info>Tipo: {TIPO}</Info>
        <Info>Genero: {GENERO}</Info>
        <Info>Origen: {ORIGEN}</Info>
        <Info>Localizacion: {LOCATION}</Info>
      </div>
    </Card>
  )
}

export default CardPersonaje;