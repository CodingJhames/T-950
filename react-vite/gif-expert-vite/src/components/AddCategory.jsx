import { useState } from "react"


const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Demon Slayer');

    const onInputChange = ( {target} ) => {
        setInputValue(target.value);
        // console.log(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
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