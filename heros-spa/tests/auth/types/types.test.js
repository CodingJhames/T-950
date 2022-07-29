import types from "../../../src/auth/types/types";

describe('Pruebas en Types', () => { 

    test('Debe de regresar estos Types', () => { 

        expect( types ).toEqual( { login: '[Auth] login', logout: '[Auth] logout' } );




        })



    })