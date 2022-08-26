import { async } from "@firebase/util";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { clearNotesLogOut } from "../journal";
import { logout, login } from "./index";
import { checkingCredentials } from "./index";




export const chekingAuthentication = ( email, password  ) => {

    return async( dispatch ) => {
        
        dispatch( checkingCredentials() );

    }
}

export const startGoogleSignIn = () => {

    return async( dispatch  ) => {

        dispatch(  checkingCredentials() );

        const result = await signInWithGoogle();
        // console.log({ result });

        if ( !result.ok ) return  dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) );
        

    }
  
  }

export const startCreatingUserWithEmailPassword = ( {email, password, displayName} ) => {

    return async ( dispatch ) => {

        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword( { email, password, displayName } );
        // console.log( resp );

        if ( !ok ) return dispatch( logout( { errorMessage }) );

        dispatch( login( {  uid, displayName, email, photoURL } ) );

    


    }
}

export const startLoginWithEmailPassword = ( {  email, password }  ) => {

    return async( dispatch ) => {

        dispatch( checkingCredentials()  );

        const result = await loginWithEmailPassword( { email, password }  );
        console.log(result);

        if( !result.ok ) return dispatch( logout( result ) );

        dispatch( login( result ) );

    }


}

export const startLogout = () => {

    return async( dispatch ) => {

        await logoutFirebase();
        dispatch( clearNotesLogOut());
        dispatch( logout() );

    }
}