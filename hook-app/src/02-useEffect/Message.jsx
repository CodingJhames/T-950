

import React, { useEffect, useState } from 'react'

const Message = () => {


  const [coords, setCoords] = useState({ x:0, y:0 });

    useEffect(() => {
      
      const mouseMove = ( {x,y}) => {
        // const coords = { x, y }
        // console.log( coords );
        setCoords( {x, y } );
      }
      
      // console.log('Message mounted');
      
      window.addEventListener( 'mousemove', mouseMove );

      return () => {
        // console.log('Message unmounted');
        window.removeEventListener('mousemove', mouseMove );
      }
    }, [])
    


  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify( coords ) }
    </>
  )
}

export default Message