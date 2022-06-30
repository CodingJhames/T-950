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

        const inputValue    = 'Demon Slayer';
        const onNewCategory = jest.fn();

        render( <AddCategory  onNewCategory={ onNewCategory } />  );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input,  { target: { value: inputValue } } );
        fireEvent.submit( form  );
        // screen.debug();
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

      })

      test('No debe llamar el onNewcategory si el input está vacío', () => { 

        const onNewCategory = jest.fn();
        render( <AddCategory  onNewCategory={ onNewCategory } />  );

        const form = screen.getByRole('form');
        fireEvent.submit( form  );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        // expect( onNewCategory ).not.toHaveBeenCalledTimes();--> otra alternativa

       })

})