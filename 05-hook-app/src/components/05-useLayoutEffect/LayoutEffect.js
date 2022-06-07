


import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'
import '../05-useLayoutEffect/layout.css'

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {  quote } = !!data && data[0];

    /* el objetivo del Hook useLyaoutefect es que desdepués de que se renderice algo se puedan sacar mediciones de como quedaron 
    los diferentes componentes ( divs etc), ó ejecutar codigo despues de que se renderiza todo el HTML  */

    const [boxsize, setBoxSize] = useState({});

    const parrTag = useRef();

    useLayoutEffect(() => {
      
        // console.log('hey nikka!');
        // console.log(  parrTag.current.getBoundingClientRect() );
        setBoxSize( parrTag.current.getBoundingClientRect()  );

    }, [ quote ])

    
    
    return (

    <div>
    <h1>LayoutEffect</h1>
    <hr/>
           
                    <blockquote className='blockquote text-right'>
                    <p className='mb-0'
                    ref={ parrTag  }
                    >{quote}</p>
                    <br></br>
                    </blockquote>


        <pre>
            {JSON.stringify( boxsize, null, 3 ) }
        </pre>
                
        <button className='btn btn-success' onClick={increment}>Next Quote</button>
        </div>

    )
}

/* se le puede agregar que se oculte el boton de Next cuando ya sea */

