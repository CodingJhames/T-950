

import React from 'react'

const GridWaifus = ( { id, url } ) => {

   
  console.log( id, url );

  return (
    <div>
       <img src={url} alt={id} id="waifu" className="img-fluid img-thumbnail" ></img>
    </div>
  )
}

export default GridWaifus