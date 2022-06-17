
import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory';


const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Demon Slayer', 'T-800']);
    

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

        <ol>
            { categories.map( category => {
                return <li key={ category } >{category}</li>
            } ) }
            {/* <li></li> */}
        </ol>
    
    </>
  )
}

export default GifExpertApp