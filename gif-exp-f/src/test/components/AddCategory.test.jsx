import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en AddCategory', () => { 

    test('Debe de cambiar en la caja de texto', () => { 

        render( <AddCategory  onNewCategory={ () => {} } />  );
        // screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input( input,  { target: { value: 'Demon Slayer' } } );
        expect( input.value).toBe('Demon Slayer');

        // screen.debug();

     })



})