import React, { useState } from "react";
import { ModalGenerico } from "./ModalGenerico";
import styled from "styled-components";

const Lista = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ItemLista = styled.li`
  cursor: pointer;
  padding: 10px;
  margin-bottom: 2px;
  border-bottom: 1px solid #ccc;
  color: #fff;
  background-color: #001e4f;
  border-radius: 10px;
  font-weight: bold;
  font-size: 40px;
  text-transform: uppercase;
  font-family: Ink Free;
  &:hover {
    background-color: #2e61b3;
  }
`;

export const ListaGenerica = (props) => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [elementoSeleccionado, setElementoSeleccionado] = useState(null);

  const abrirModal = (elemento) => {
    setModalAbierto(true);
    setElementoSeleccionado(elemento);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setElementoSeleccionado(null);
  };

  return (
    <div>
      <Lista>
        {props.lista.map((elemento, index) => (
          <ItemLista key={index} onClick={() => abrirModal(elemento)}>
            {elemento.name}
          </ItemLista>
        ))}
      </Lista>
      {modalAbierto && (
        <div>
          <ModalGenerico onClose={cerrarModal} personaje={elementoSeleccionado}>
          </ModalGenerico>
        </div>
      )}
    </div>
  );
};
