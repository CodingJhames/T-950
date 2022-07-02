
import React, { useEffect } from 'react'
import useForm from '../hooks/useForm';


const FormCustomHook = () => {

    // const [formState, setFormState] = useState({
    //     username:'',
    //     email: '',
    //     password: ''
    // });

    // const {  username, email, password } = formState;

    // const onInputChange = ({target}) => {
    //     // console.log(e.target.value);
    //     const { name, value } = target;
    //     setFormState({
    //         ...formState,
    //         [ name ]: value
    //     })
    // }

    const { formState, onInputChange,username, password, email  } = useForm(
        {
        username:'',
        email: '',
        password: ''
        }
    );

    // const { username, email, password } = formState;

    // useEffect(() => {
    //     // console.log('useEffect called');
    // }, []);

    // useEffect(() => {
    //     // console.log('FormState changed!');
    // }, [formState]);

    // useEffect(() => {
    //     // console.log('Email changed!');
    // }, [email]);
    
  return (
    <>
        <h1>Form Custom Hook</h1>
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

        <input 
        type="password" 
        className='form-control mt-2'
        placeholder='Password'
        name='password'
        value={ password }
        onChange={onInputChange}/>

       
    </>
  )
}

export default FormCustomHook;