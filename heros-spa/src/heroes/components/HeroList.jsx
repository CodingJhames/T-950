
import React from 'react';
import HeroCard from '../../auth/components/HeroCard';
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"


const HeroList = ( {publisher} ) => {
  
    const heroes = getHeroesByPublisher( publisher );
  
  
    return (
    
    <div className='row rows-cols-1 row-cols-md-3 g-3' >
        {
            heroes.map( hero =>(
                // <li key={heroe.id}>{heroe.superhero}</li>
                <HeroCard 
                key={hero.id}
                {...hero}
                />
            ))

          

        }


    </div>
  )
}

export default HeroList