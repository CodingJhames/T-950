import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
   
    test('getUser debe retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        console.log( user );

        expect( testUser ).toStrictEqual( user );
    
     })


     test('getUsuario debe retornar un objeto', () => { 

            const name = 'James';

            const activeUser = getUsuarioActivo( name );
            console.log( activeUser );

            expect( activeUser  ).toEqual( {
                uid: 'ABC567',
                username: name
            } );
      })



 })