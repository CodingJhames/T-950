
import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef();
    // console.log(ref);

    /* el hook de useRef se usa mas que todo para mantener una referencia mutable */
    const handleClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }

  return (
    <div>

        <h1>FocusScreen</h1>
        <hr></hr>

        <input 
            ref={inputRef}
            className='form-control'
            placeholder='Your Name'>
        </input>
       
        <button
        className='btn btn-outline-primary mt-5'
        onClick={ handleClick }>
            Focus
        </button>
    </div>
  )
}
