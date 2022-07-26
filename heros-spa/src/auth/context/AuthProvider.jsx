
import { useReducer } from 'react'
import types from '../types/types';
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';

/* const initialState = {
    logged: false,
}
 */

// ? fernando menciona que no es necesario el incialState
// ? entonces por eso lo deja como un objeto vacío en el reducer
// ? y la funcion "init" se va a encargar de cargar esas propiedades

const init = () => {
  const user = JSON.parse( localStorage.getItem( 'user' ) );

  return {
    logged: !!user,
    user: user,
  }

}


export const AuthProvider = ( {children } ) => {

    const [ authState, dispatch ] = useReducer( authReducer, {}, init );

    // ! tener en cuenta aqui el detalle del tercer elemento que recibe el
    // ! useReducer, el "init"

    const Login = ( name = '' ) => {

      const user = {
        id: 'ABC',
        name: name
      }

      const action = {
        type: types.login,
        payload: user,
      }

      localStorage.setItem( 'user', JSON.stringify(user) );

      dispatch( action );
    }

  return (

    <AuthContext.Provider value={{ 
      ...authState,
      Login: Login
    }}>
        
        { children }

    </AuthContext.Provider>
  )
}


