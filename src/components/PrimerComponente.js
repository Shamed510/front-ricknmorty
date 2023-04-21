/* rafc */  
import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { Requests } from './Requests'

/* Un componente en react es una 'funcion' que devuelve es una renderizacion de
    pantalla, un trozo de html a mostrar en el navegador */

export const PrimerComponente = () => {
    /* Se pueden hacer uso de variables dentro de los componentes para mostrar en pantalla */
    // let nombre = "Dave"

    /* Hacemos uso de 'useState' para cambiar el estado de un valor */
    // const [nombre, setNombre] = useState("Dave")

    const {data, error, loading} = useQuery(PERSONAJE);

    /* Asi se declara una funcion anonima en react */
   /*  const cambiarNombre = () =>{
        const IDRAND = Math.floor(Math.random() * 100) + 1;
        client.query({
        query: ,
        })
        .then((result) => {
            // Asignar el valor de 'name' a una variable
            setNombre(result.data.character.name);
        });
    } */

    
    if (error) return <span>{error}</span>

  return (

    <div>
        {loading ? <p>Loading...</p> :
            (
                <p>
                    {data && data.character.name}
                </p>
            )
        }
    </div>
  )
}
