import { useState } from "react"


const AddCategory = ( {onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( {target} ) => {
        setInputValue(target.value);
        // console.log(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        // setCategories( categories => [ inputValue,...categories ] );
        onNewCategory( inputValue.trim() );
        setInputValue('');

    }

  return (

    <form onSubmit={ e => onSubmit(e)} >

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

export default AddCategory