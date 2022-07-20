

import React from 'react'
import { Link } from 'react-router-dom';

const HeroCard = ( {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    const charactersByHero = ( <p>{characters}</p> );

    /* otra alternativa que sugiere fernando es crear un componente
    que sólo se use aquí, en razón que según él es más fácil de leer. 

    const charactersByHero = ( { alter_ego, characters  } ) => {

        if ( alter_ego === characters ) return (<></>);
            
        return <p>{characters}</p>; 
        
    } */


  return (
    <div className='col'>
        <div className='card'>

            <div className="row no-gutters">
                <div className="col-4">
                    <img src={heroImageUrl} className='card-img' alt={superhero} />
                </div>
            </div>

            <div className="card-8">
                
                <div className="card-body">

                    <h5 className='card-title'>{ superhero}</h5>
                    <p className='card-text'>{alter_ego}</p>
                    
                    {/* primera forma para que no se muestren 2 veces el nombre del personaje */}

                    {/* {
                        ( alter_ego !== characters ) && ( <p>{characters}</p> )
                    } */}

                    {/* segunda forma que sugiere fernando Herrera */}

                    {
                        ( alter_ego !== characters ) && charactersByHero 
                    }

                    {/* 
                    
                    { 
                        ( alter_ego !== characters ) && <p> { characters } </p>
                    }
                    
                    */}


                    {/* Forma alterna que sugiere fernando a través de un componente
                    
                    <charactersByHero  characters={ characters } alter_ego={ alter_ego } />

                    */}


                    <p className='card-text'>
                        <small className='text-muted'>{first_appearance}</small>
                    </p>

                    <Link to={`/hero/${id}`}>
                        Mas..
                    </Link>


                </div>
            </div>


        </div>
    </div>
  )
}

export default HeroCard