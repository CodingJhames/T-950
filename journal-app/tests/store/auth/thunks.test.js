import {  loginWithEmailPassword, logoutFirebase, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import {  checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks";
import { clearNotesLogOut } from "../../../src/store/journal/journalSlice";
import { demoUser } from "../../fixtures/authFixtures";



jest.mock('../../../src/firebase/providers');


describe('Pruebas en AuthThunks', () => { 

    const dispatch = jest.fn();
    beforeEach( () => jest.clearAllMocks() );

    test('Debe de invocar el checkingCredentials', async() => { 
        // const valor = checkingCredentials();
        // console.log( valor );

        await checkingAuthentication()(dispatch);
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    });

    test('startGoogleSigIn Debe de llamar checkingCredentials y login - Éxito', async() => { 

        const loginData = { ok:true, ...demoUser };
        await signInWithGoogle.mockResolvedValue( loginData );
        
        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
    });

    test('startGoogleSigIn Debe de llamar checkingCredentials y logout - Error', async() => { 

        const loginData = { ok: false, errorMessage: 'Un error en Google' };
        await signInWithGoogle.mockResolvedValue( loginData );
        
        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage )  );
        
    });

    test('startLoginWithEmailPassword Debe de llamar checkingCredentiales y login - Exito', async() => { 

        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, parssword: '123456' };

        await loginWithEmailPassword.mockResolvedValue(loginData);
        await startLoginWithEmailPassword( formData )( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );

        // ! hacer las otras pruebas

    });

    test('startLogout Debe de llamar logoutFirebase, clearNotes y logout', async() => { 

        await startLogout()( dispatch );

        expect(  logoutFirebase ).toHaveBeenCalled();
        expect(  dispatch ).toHaveBeenCalledWith( clearNotesLogOut() );
        expect( dispatch ).toHaveBeenCalledWith( logout() );

    });

});