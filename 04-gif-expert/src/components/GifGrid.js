import React, { useEffect, useState } from 'react'


export const GifGrid = ( {category}) => {


    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs();
    }, [])


    const getGifs = async () => {

        const url ='https://api.giphy.com/v1/gifs/search?limit=10&q=slam+dunk&api_key=BsW6v8H74iBT4mTYmspQQnvmzK5DaDQ6'

        const resp = await fetch( url);

        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }

        })

        console.log(gifs);
        setImages( gifs);
    }

  return (
    <>
    <h3>{ category }</h3>
    <ol>
        {/* <li >title</li>     */}
        
        {  images.map( image => (
            
            <li key={image.id}>{image.title}</li>
            
        ))}
    </ol>

    </>
  )
}
