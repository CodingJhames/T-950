
import { useEffect, useState } from 'react';
import './App.css';
import GridWaifus from './components/GridWaifus';

function App() {

    const [images, setImages] = useState([]);

  /* con el useEffect no se vuelven a llamar las peticiones 
  a la API de las waifus */

  
  useEffect( () => {

    getWaifu();

  }, [] )

  const getWaifu = async () => {

    // const font = "https://api.waifu.im/random/?selected_tags=marin-kitagawa";
    const font = "https://api.waifu.im/random/";

    const resp = await fetch( font );

    const {images } = await resp.json();

    const monas = images.map( img => {
      return {
        id: img.image_id,
        url: img.url
      }
    })

    console.log( monas );
    setImages( monas );
}

  // getWaifu();


  return (
    <div id='container' className='container-md'  >

      <h1>Waifu App</h1>
      <hr></hr>
      {
        images.map ( img => (
          <GridWaifus 
          key={img.id} 
          { ...img } />
        ))
      }

      <button onClick={  getWaifu }  className='btn btn-primary mt-5' >Get Waifu</button>
      
    </div>
  );
}

export default App;
