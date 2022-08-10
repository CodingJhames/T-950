import { useDispatch } from "react-redux"
import { chekingCredentials } from "./authSlice"


export const chekingAuthentication = ( email, password  ) => {


    return async( dispatch ) => {
        
        dispatch( chekingCredentials()  );

    }
}

export const startGoogleSignIn = () => {

    return async( dispatch  ) => {

        dispatch(  chekingCredentials() );
    }
  
  }