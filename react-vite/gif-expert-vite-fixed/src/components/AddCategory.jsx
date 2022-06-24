import { useState } from "react"
import  PropTypes from "prop-types";


export const AddCategory = ( {onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( {target} ) => {
        setInputValue(target.value);
        // console.log(target.value);
    }

    const onSubmit = (e) => {
        // console.log('Hola Parchita desde onSubmit');
        e.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        // setCategories( categories => [ inputValue,...categories ] );
        onNewCategory( inputValue.trim() );
        setInputValue('');

    }

  return (

    <form onSubmit={ e => onSubmit(e)} aria-label="form" >

        <input 
            type="text"
            placeholder="buscar Gifs" 
            value={inputValue}
            // onChange={ ( event ) => OnInputChange(event) }
            onChange={ onInputChange }
        />

    </form>

  )
}

AddCategory.propTypes = {

    onNewCategory: PropTypes.func.isRequired,
}

export default AddCategory