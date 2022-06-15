import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import { heroes } from '../../../src/data/heroes'

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeByID debe de retornar un héroe por ID', () => {

        const id = 1;

        const hero = getHeroeById( id );

        expect( hero ).toEqual( {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        } );


     })


    test('getHeroeByID debe de retornar undefined si no existe ID', () => {

        const id = 100;

        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();

    })

    test('getHeroeByOwner debe de retornar un arreglo con héroes de DC', () => {

        const owner = 'DC';

        const heroesFiltered = getHeroesByOwner( owner );

        console.log( heroesFiltered );

        expect( heroesFiltered.length ).toBe( 3 );
        expect( heroesFiltered ).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]
       );


     })


     test('getHeroeByOwner debe de retornar un arreglo con héroes de Marvel', () => {

        const owner = 'Marvel';

        const heroesFiltered = getHeroesByOwner( owner );

        console.log( heroesFiltered );

        expect( heroesFiltered.length ).toBe( 2 );
        expect( heroesFiltered ).toEqual( [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]
       );

        expect( heroesFiltered ).toEqual( heroesFiltered.filter( heroeFiltered => heroeFiltered.owner === owner ) );
        

     })



     


})