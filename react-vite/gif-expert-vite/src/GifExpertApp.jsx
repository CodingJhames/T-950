
import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Demon Slayer']);
    

    const onAddCategory = ( newCategory ) => {
        
        if( categories.includes( newCategory )) return;
        // console.log( newCategory );

        setCategories([
            
            newCategory,
            ...categories
        ])

        /* segunda forma de agregar elementos al arreglo de useState
            setCategories( cat => [..categories, 'Kiss'] );
        */
    }

    return (
    <>

        <h1>GifEXpertApp</h1>
        <hr></hr>
        <br></br>

        <AddCategory 
            // setCategories={setCategories}
            onNewCategory={ event => onAddCategory( event ) }
        
        />
        
        {/* <button onClick={ onAddCategory } >Agregar</button> */}


        {/* <div key={ category }>
                    <h3>{category}</h3>
                    <li >{category}</li>
                </div> */}

        
        { 
        
        categories.map( ( category ) => (

            < GifGrid 
            key={category}
            category={category} 
            />
        )

            ) }
        {/* <li></li> */}
        
    
    </>
  )
}

export default GifExpertApp