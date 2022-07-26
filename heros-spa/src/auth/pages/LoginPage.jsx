
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context';


const LoginPage = () => {


  const { Login } = useContext( AuthContext )
  const navigate = useNavigate();

  const onLogin = () => {

    Login('James');

      navigate( '/',{
        replace: true
      } )
  }

  return (
    <div className='container mt-5'>
        <h1>Login</h1>
        <hr></hr>

        <button className='btn btn-primary'
        onClick={onLogin}>
          Login
        </button>
    </div>
  )
}

export default LoginPage