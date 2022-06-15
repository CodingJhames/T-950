import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas es 09-Promesas', () => { 

    test('getHeroeByIdAsync Debe de retornar un heroe', ( done ) => { 

    const id = 1;

    getHeroeByIdAsync( id )
        .then( hero => {

            expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' }  );

            done();
        } )
    })


    test('getHeroeByIdAsync Debe de obtener un error si el heroe no existe', ( done ) => { 


        const id = 100;
    
        getHeroeByIdAsync( id )
            .then( heroe => {
                
                expect( heroe ).toBeFalsy();
                done();
            } )
            .catch( error  => {

                expect( error ).toBe( `No se pudo encontrar el héroe ${id}`);
                console.log(error);
                
                done();
            });
        })
    
    



 })