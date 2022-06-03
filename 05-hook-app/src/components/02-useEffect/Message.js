
import React, { useEffect } from 'react'

const Message = () => {
    
    useEffect(() => {
      
        console.log('Componente Message montado');
    
      return () => {
        console.log('Componente Message desmontado');
      }
    }, [])
    



  return (
    <div>
        <h3>Mao Micho!</h3>
    </div>
  )
}

export default Message