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


     test('Debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Demon Slayer';
        render( <AddCategory  onNewCategory={ () => {} } />  );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input,  { target: { value: inputValue } } );
        fireEvent.submit( form  );
        // screen.debug();
        expect( input.value ).toBe('');





      })
})