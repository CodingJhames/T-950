
import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid  } from './components/GifGrid';


const GifExpertApp = () => { 

    // const categories = [ 'One Punch', 'Slam Dunk','Dragon Ball','Bleach'];
    const [categories, setCategories] = useState([ 'slam dunk']);

  // const handleAdd = ( ) => {    
  //   setCategories( [ ...categories, 'Hunter x Hunter'] );
  // }
  
  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory  setCategories={setCategories}/>
    <hr/>

    {/* <button onClick={ handleAdd }>Agregar</button> */}

    <ol>
        { 
            categories.map( category => (
            // return <li key={category}> {category}</li>
            <GifGrid 
              key={category}
              category = {category}
            />
        ))
        }
    </ol>

    </>
  )
}

export default GifExpertApp;