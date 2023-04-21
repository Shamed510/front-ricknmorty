import { gql } from '@apollo/client';

/* Definicion de una consulta GraphQL */
/* Para solicitar un parametro para la consulta se utiliza  '$' y asi mismo el tipo
    de dato a recibir, el signo de adminracion se utiliza para indicar que es un
    parametro requerido */
const GET_PERSONAJE = gql`
    query personajeById($id: ID!){
        character(id: $id) {
            id
            name
            image
            status
            species
            type
            gender
            origin{
              name
            }
            location{
              name
            }
        }
    }
`;



export { GET_PERSONAJE };