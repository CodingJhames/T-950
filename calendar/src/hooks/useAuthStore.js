import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        // console.log( email, password );

        dispatch( onChecking() );

        try {
        
            const {data} = await calendarApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin( {name: data.name, uid: data.uid }) );
            // console.log( {resp});
            
        } catch (error) {
            // console.log({error});
            dispatch( onLogout('Credenciales Incorrectas') );
            setTimeout( () => {
                dispatch( clearErrorMessage() );
            }, 10 );
        }
    }

    const startRegister = async({ name, email, password }) => {

        dispatch( onChecking() );

        try {
        
            const {data} = await calendarApi.post('/auth/new', { name, email, password });
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin( {name: data.name, uid: data.uid }) );
            // console.log( {resp});
            
        } catch (error) {
            // console.log({error});
            dispatch( onLogout( error.response.data?.ms || '--' ) );
            setTimeout( () => {
                dispatch( clearErrorMessage() );
            }, 10 );
        }
    
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch( onLogout() );

        try {
            const {data} = await calendarApi.get('auth/renew');
            console.log( {data} );
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin( {name: data.name, uid: data.uid }) );

        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    const startLogout = async() => {
        localStorage.clear();
        dispatch( onLogout());
    }

    return {

        // properties
        errorMessage,
        status,
        user,

        // methods
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,

    }

}