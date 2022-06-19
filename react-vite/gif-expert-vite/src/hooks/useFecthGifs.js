import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFecthGifs = ( category ) => {
  
     const [images, setImages] = useState([]);
     const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        getGifs( category )
          .then( newImages => setImages( newImages) );
          setIsLoading();
        }, [] )


    return {
        images: images,
        isLoading: isLoading

    }



}














