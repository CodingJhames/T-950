
import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/effects.css'




const RealEXampleRef = () => {

    const [show, setShow] = useState(false);


  return (
    <>
    <h1>RealEXampleRef</h1>
    <hr></hr>

    { show && < MultipleCustomHooks /> }

    <button 
    className='btn btn-primary mt-5'
    onClick={ () => {
        
    }}>
        Show/Hide
    </button>
   
    </>
  )
}

export default RealEXampleRef
