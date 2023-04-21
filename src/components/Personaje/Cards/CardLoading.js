import React from 'react'
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingIndicator = styled.div`
  display: inline-block;
  width: 5em;
  height: 5em;
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spinAnimation} 1s ease-in-out infinite;
  font-size: 3rem;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #fff;
`;

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

  /* contenedor para hacer que el componente sea responsive */
  &.loading-container {
    max-width: 600px; /* ajusta este valor según tus necesidades */
    margin: auto; /* centrar el contenedor horizontalmente */
  }
`;

export const CardLoading = () => {
  return (
    <Card>
      <div>
        <Title>Cargando...</Title>
        <LoadingIndicator />
      </div>
    </Card>
  )
}

