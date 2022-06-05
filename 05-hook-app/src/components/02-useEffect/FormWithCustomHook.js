
import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';

import './effects.css'


export const FormWithCustomHook = () => {
  
/* aqui fernando cambia el useState por el useForm del custom hook que maneja el estado de los formularios */

        /* const [formState, setFormState] = useState({
            name: '',
            email:'',
            password:''
        }); */

        const [formValues, handleInputChange ] = useForm({
            name: '',
            email:'',
            password:''
        });
    
        const { name, email,password } = formValues;
    
    
        // useEffect( () => {
        //     // console.log('hey');
        // },[]);
    
    
        // useEffect( () => {
        //     // console.log('formState cambió!');
        // },[ formState ]);
    
        // useEffect( () => {
        //     // console.log('email cambió!');
        // },[ email ]);
    
        // const handleInputChange = ({target}) => {
        // //     // console.log(e.target.value);
        //     setFormState({
        //         ...formState,
        //         [target.name]: target.value,
        //     });
        // }

        useEffect( () => {
            console.log('email cambió!');
        },[email ])

        const handleSubmit = (e) => {
            e.preventDefault();

            console.log( formValues );
        }

    
      return (

        <form onSubmit={handleSubmit}>

        <h1>FormWithCustomHook</h1>
        <hr/>
    
        <div className='form-group'>
            <input 
            type='text'
            name='name'
            className='form-control'
            placeholder='Tu Nombre'
            value={name}
            onChange={handleInputChange}
            ></input>
        </div>
        <br></br>
        <div className='form-group'>
            <input 
            type='text'
            name='email'
            className='form-control'
            placeholder='email@gmail.com'
            autoComplete='off'
            value={email}
            onChange={handleInputChange}
            ></input>
        </div>
        <br></br>
        <div className='form-group'>
            <input 
            type='password'
            name='password'
            className='form-control'
            placeholder='**********'
            value={ password }
            onChange={handleInputChange}
            ></input>
        </div>
        <br></br>
        {/* {(name === '123')&& <Message/>} */}
        
        <button type='submit' className='btn btn-primary'>Guardar</button>

        </form>
      )
    }
  
  

