

import {useState} from 'react'

/* 
custom Hook que se va a encargar de manejar el estado de los formularios
*/

 /* se define el initialState como un objeto vacío para prevenir que marque un error, siendo ese objeto exactamente igual al que tiene los campos que se requieren del componente Forwithcustomhook  */

const useForm = ( initialState = {}) => {
  
   
    const [values, setValues] = useState(initialState);

    /* Fernando define otra vez la funcion handle input change para poder traerla, para poder manejar el evento que viene del otro componente osea, FormWithCustomHook */   

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
    }

    /* fernando regresa el arreglo con values como estado del formulario y el handleinputchange  */
    return [ values, handleInputChange ];
}

export default useForm;

