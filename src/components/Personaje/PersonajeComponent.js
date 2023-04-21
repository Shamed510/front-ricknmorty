import React, { useState } from 'react'
import { GET_PERSONAJE } from '../../Requests'
import { useLazyQuery } from '@apollo/client'
import CardPersonaje from './Cards/CardPersonaje'
import { BotonGenerico } from './Shared/BotonGenerico'
import { CardLoading } from './Cards/CardLoading'
import { ListaGenerica } from './Shared/ListaGenerica'
import styled from 'styled-components';

/* Styled components */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  h1 {
    text-align: center;
    font-family: Consolas;
    font-size: 50px;
  }
`

const CardContainer = styled.div`
  width: 50%;
`

const ButtonContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

const ListaWrapper = styled.div`
    width: 100%;
`;

export const PersonajeComponent = () => {

    /* Esto es destructuracion, lo cual asinga dos valores a dos constantes al mismo tiempo
        donde la primera constante 'getPersonaje' se convierte en una funcion para ser llamada mas adelante 
        y la segunda constante 'result' va a actualizarse al recibir el resultado de la consulta*/
    const [getPersonaje, personaje] = useLazyQuery(GET_PERSONAJE);

    /* Utilizando el hook 'useState' te permite declarar una variable de estado 
    que puedes actualizar dentro del componente y que se mantendrá a lo largo de la ejecucion*/
    const [personajeAux, setPersonajeAux] = useState(null);
    const [lista, setLista] = useState([]);

    /* Asi se declara una funcion anonima en react, la cual manda a llamar la funcion getPersonaje
    de la consulta gql, y manda los parametros o variables necesarios para la consulta */
    const generarPersonaje = () => {
        if (personajeAux) {
            agregarElemento(personajeAux.character);
        }
        getPersonaje({
            variables: { id: generarNumero() }
        }).then((result) => setPersonajeAux(result.data));
    };

    /* Esta funcion genera un numero aleatorio entre 1 y 826 que son el numero de personajes
    existentes en la API de Rick N Morty */
    const generarNumero = () => {
        const IDRAND = Math.floor(Math.random() * 826) + 1;
        return IDRAND;
    }

    const agregarElemento = (elemento) => {
        setLista([...lista, elemento]);
    };

    if (personaje.error) return <span>{personaje.error.message}</span>

    return (
        <Container>
            <CardContainer>
                {personaje.loading ? <CardLoading /> :
                    personaje.data ? (
                        <CardPersonaje character={personaje.data.character} />
                    ) : (
                        <h1>NO SE HA GENEDRADO NINGUN PERSONAJE</h1>
                    )
                }
            </CardContainer>
            {/* La funcion de 'generarPersona()' se tiene que llamar dentro de una funcion anonima para asi
            evitar la ejecucion en cada renderizado del componente y no entrar en un bucle infinito */}
            <ButtonContainer>
                <BotonGenerico onClick={() => { generarPersonaje() }} children={'Generar'}></BotonGenerico>
            </ButtonContainer>
            <ListaWrapper>
                <ListaGenerica lista={lista} />
            </ListaWrapper>
        </Container>
    )
}
