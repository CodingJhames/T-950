import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFectchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( {category}) => {


    const { data:images, loading } = useFetchGifs( category);

    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifs( category)
    //         .then( imgs => setImages( imgs ) );
    // }, [ category ])


  return (
    
    <>
    <h3>{ category }</h3>

    { loading && <p>Loading</p>}

    {/* { loading ? 'Cargando...' : 'data cargada!'} */}

    {/* <div className='card-grid'>
    
    <ol>
        <li >title</li>    
        
        {  images.map( img => (
            
            <li key={image.id}>{image.title}</li>
            <GifGridItem 
            key={img.id}
            {...img} />
            
        ))}
    </ol>

    </div> */}

    <div className='card-grid'>
    
    <ol>
         
        
        {  images.map( img => (
            
            <GifGridItem 
            key={img.id}
            {...img} />
            
        ))}
    </ol>

    </div> 
    </>

  )
}
