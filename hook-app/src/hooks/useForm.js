import { useState } from "react";


const useForm = ( initialForm = { } ) => {

    const [formState, setFormState] = useState( initialForm );

    // {
    //     username:'',
    //     email: '',
    //     password: ''
    // }

    // const {  username, email, password } = formState;

    const onInputChange = ({target}) => {
       
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    return {
        ...formState,
        formState,
        onInputChange
    }
  
}

export default useForm