import React, { useRef } from 'react';
import styled from 'styled-components';
import CardPersonaje from '../Cards/CardPersonaje';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
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
`;

const Info = styled.p`
  margin: 10px;
  font-weight: bold;
  font-size: 24px;
  font-family: Consolas;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 40px;
  text-transform: uppercase;
  font-family: Ink Free;
  text-align: center;
`;

const Image = styled.img`
  margin-right: 20px;
  margin-left: 20px;
  width: auto;
  height: auto;
  border-radius: 10px;
`;

export const ModalGenerico = ({ onClose, personaje }) => {
    const modalRef = useRef();

    const handleCloseModal = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };
    return (
        <ModalContainer onClick={handleCloseModal}>
            <ModalContent ref={modalRef}>
                <Card>
                    <div>
                        <Image src={personaje.image} alt={personaje.name} />
                        <Name>{personaje.name}</Name>
                    </div>
                    <div>
                        <Info>ID: {personaje.id}</Info>
                        <Info>Estatus: {personaje.status}</Info>
                        <Info>Raza: {personaje.species}</Info>
                        <Info>Tipo: {personaje.type}</Info>
                        <Info>Genero: {personaje.gender}</Info>
                        <Info>Origen: {personaje.origin.name}</Info>
                        <Info>Localizacion: {personaje.location.name}</Info>
                    </div>
                </Card>
            </ModalContent>
        </ModalContainer>
    );
};
