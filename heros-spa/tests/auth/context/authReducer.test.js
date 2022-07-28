import { authReducer } from "../../../src/auth/context/authReducer"
import types from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => { 

    test('Debe de retornar el estado por defecto', () => { 

        const state = authReducer( { logged: false}, {} );
        expect( state ).toEqual( { logged: false} );

        })

    test('Debe de llamar el login así como establecer y autenticar el user', () => { 

        const action = {
            type: types.login,
            payload: {
                name: 'James',
                id: '123'
            }
        }

        const state = authReducer( { logged: false }, action );
        expect( state ).toEqual({
            logged: true,
            user: action.payload
        })

    })

    test('Debe de llamar el logout, borrar el name del user y dejar el logged en false', () => { 

        const state = {
            logged: true,
            user: { id:'123', name:'James'}
        }
        
        const action = {
            type: types.logout
        }

        const newState = authReducer( state, action );
        expect( newState ).toEqual( { logged: false } );



        })



})