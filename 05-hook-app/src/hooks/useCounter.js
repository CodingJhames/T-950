import {useState} from 'react';


export const useCounter = ( initialState = 10 ) => {

  const [counter, setCounter] = useState(initialState);
  
  /* aqui fercho clara que el no usa el factor, entonces por eso les quita el factor a cada función 
  para usarlas  */

  /* const increment = ( factor = 1 ) => {
    setState(  state + factor );
  }
  
  const decrement = ( factor = 1 ) => {
    setState(  state - factor  );
  }

  const reset = () => {
    setState( initialState );
  } */

  const increment = (  ) => {
    setCounter(  counter + 1 );
  }
  
  const decrement = (  ) => {
    setCounter(  counter - 1 );
  }

  const reset = () => {
    setCounter( counter );
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }
  
}

