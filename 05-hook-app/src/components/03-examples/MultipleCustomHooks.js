

import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

     /* aqui fernando implementa la logica del boton Next Quote, usando un contador para saber en cual quota se está, usando el useCounter */

     const { counter, increment } = useCounter(1);


    /* aqui cuando toca traer la data del quote viene primero como un null y después como un arreglo
    donde el primer elemento de ese arreglo es esa data que se quiere extraer, pero como en un momento es null y luego se tiene información 
    porque si se quiere extraer de esta manera null[0] eso va a regresar un error entonces no se puede hacer directamente por tanto toca hacer una 
    validación */

    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}`);

    // console.log(state);

    /* explicación de esta lógica que hizo Fernando
    !!data --> significa que si la data es correcta. se pone esos dos "!!" para convertir la data que viene de tipo null, como se habia dicho anteriormente.
    osea si se pone un "!" a un null se convierte en true y si se le ponen dos "!!" se convierte en false
    &&--> si es correcta ejecutará data[0] --> que es la data que se viene en la primer posición del arreglo
    del fetch.
    */
    const { author, quote } = !!data && data[0];

    // console.log( author, quote );

    /* Aqui fernando usa un operador ternario para poner un condicional de acuerdo a si cambia el estado
    del Loading, si es true se renderiza y luego si es false tambien se renderiza de acuerdo al caso */
    return (

    <div>
    <h1>Breaking Bad Quotes</h1>
    <hr/>

        { loading 
            ?
                (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                    
                )
            :
                (
                    <blockquote className='blockquote text-right'>
                    <p className='mb-0'>{quote}</p>
                    <br></br>
                    <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>
                    
                )
                    
        }

        <button className='btn btn-success' onClick={increment}>Next Quote</button>
        </div>

    )
}

/* se le puede agregar que se oculte el boton de Next cuando ya sea */

