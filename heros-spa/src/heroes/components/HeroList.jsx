
import React from 'react';
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"


const HeroList = ( {publisher} ) => {
  
    const heroes = getHeroesByPublisher( publisher );
  
  
    return (
    
    <ul>
        {
            heroes.map( heroe =>(
                <li key={heroe.id}>{heroe.superhero}</li>
            ))
        }


    </ul>
  )
}

export default HeroList