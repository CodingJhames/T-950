
import React, { useEffect, useState } from 'react'
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'Chepito',
        email: 'Chepito@gmail.com'
    });

    const {  username, email } = formState;

    const onInputChange = ({target}) => {
        // console.log(e.target.value);
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect(() => {
        // console.log('useEffect called');
    }, []);

    useEffect(() => {
        // console.log('FormState changed!');
    }, [formState]);

    useEffect(() => {
        // console.log('Email changed!');
    }, [email]);
    
  return (
    <>
        <h1>Simple Form</h1>
        <hr></hr>

        <input 
        type="text" 
        className='form-control'
        placeholder='Username'
        name='username'
        value={ username }
        onChange={onInputChange}/>

        <input 
        type="text" 
        className='form-control mt-2'
        placeholder='email@gmail.com'
        name='email'
        value={email}
        onChange={onInputChange}/>

        {
            (username == 'Username') && <Message />
        }
    
    </>
  )
}

export default SimpleForm