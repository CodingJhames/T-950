import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs;"
import { useFecthGifs } from "../hooks/useFecthGifs";
import GifItem from "./GifItem";

    
  
    export const GifGrid = ( {category} ) => {
        

       const { images, isLoading } = useFecthGifs( category );

      //  console.log( images, isLoading );

      // const [images, setImages] = useState([]);

      // useEffect( () => {
      //   getGifs( category )
      //     .then( newImages => setImages( newImages) );
      // }, [] )

      
      return (
        <>

        <h3>{category}</h3>

        {
          isLoading ? 
           (<h2>Loading...</h2>)
          : null
        }

          <div className="card-grid">

            { images.map( (image) => (

              < GifItem 
              key={ image.id }
              { ...image } 
              />
              
            ) )
            }          
            
          </div>

          </>
      )
    }
    
    export default GifGrid