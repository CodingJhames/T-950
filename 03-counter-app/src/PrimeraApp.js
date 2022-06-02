
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'


const PrimeraApp = ( {saludo, subtitulo } ) => {

    // const saludo = "Hola Chepito const";
    // console.log({saludod});

    return (

        <>
            <h1>{saludo}</h1>
            <h3>{subtitulo}</h3>
        </>
    );
    

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'This is a subtitle'
}



export default PrimeraApp;