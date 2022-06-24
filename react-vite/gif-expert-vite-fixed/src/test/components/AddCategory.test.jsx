import { fireEvent, render, screen } from "@testing-library/react"
import AddCategory from "../../components/AddCategory";

describe('Pruebas en AddCategory', () => { 

    test('Debe de cambiar el valor de la caja de texto', () => { 

        render( <AddCategory onNewCategory={ ()=>{}  } /> );

        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target:{ value: 'Demon Slayer'} } );
        // screen.debug();

        expect( input.value ).toBe( 'Demon Slayer');
         
     })

 })