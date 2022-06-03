
import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coordenadas, setCoordenadas] = useState({x:0, y:0});
    const {x, y } = coordenadas;

    const mouseMove = (e) => {
        const coords = { x: e.x, y:e.y };
            // console.log(coords);
            // console.log(':D')
            setCoordenadas( coords );
    }

    useEffect(() => {
        window.addEventListener( 'mousemove', mouseMove );
    
        // console.log('Componente Message montado');
    
      return () => {
        // console.log('Componente Message desmontado');
        window.removeEventListener('mousemove', mouseMove );
      }
    }, [])
    



  return (
    <div>
        <h3>Mao Micho!</h3>
        <p>x:{x} y:{y}</p>
    </div>
  )
}

export default Message