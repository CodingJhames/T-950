
import React, { useEffect, useState } from 'react'
import './effects.css'
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email:''
    });

    const { name, email } = formState;


    useEffect( () => {
        // console.log('hey');
    },[]);


    useEffect( () => {
        // console.log('formState cambió!');
    },[ formState ]);

    useEffect( () => {
        // console.log('email cambió!');
    },[ email ]);

    const handleInputChange = ({target}) => {
        // console.log(e.target.value);
        setFormState({
            ...formState,
            [target.name]: target.value,
        });
    }

  return (
    <>
    <h1>useEffect</h1>
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

    {(name === '123')&& <Message/>}

    </>
  )
}

export default SimpleForm