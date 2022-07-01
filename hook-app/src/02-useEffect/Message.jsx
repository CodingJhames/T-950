

import React, { useEffect } from 'react'

const Message = () => {

    useEffect(() => {
      console.log('Message mounted');
    
      return () => {
        console.log('Message unmounted');
      }
    }, [])
    


  return (
    <>
        <h3>Usuario ya existe</h3>
    
    </>
  )
}

export default Message