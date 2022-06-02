import React, { useState } from 'react'
import PropTypes from 'prop-types'


const CounterApp = ( {value } ) => {

    const [ counter, setCounter ] = useState( value );
    
    const handleAdd = () => {
        // setCounter( (counter) => counter + 1);
        setCounter(  counter + 1);
    }

    const handleSubstract = () => {
        // setCounter( (counter) => counter + 1);
        setCounter(  counter - 1);
    }

    const handleReset = () => {
        // setCounter( (counter) => counter + 1);
         setCounter( value );
    }
    return (

        <>
            <h1>CounterApp</h1>
            <h3>{counter}</h3>

            <button onClick={  handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
            
        </>
    );
    
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}



export default CounterApp;