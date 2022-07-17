import { act, fireEvent, render, renderHook, screen } from "@testing-library/react";
import MultipleCustomHooks from "../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import useFetch from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');



describe('Pruebas en MultipleCustomHooks', () => { 

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })


    test('Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true ,
            hasError: null
        });


        render( <MultipleCustomHooks /> );
        // screen.debug();

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Breaking Bad Quotes') )

        const nextButton = screen.getByRole( 'button', { name: 'Next Quote' } ); 
        expect( nextButton.disabled ).toBeTruthy();


        })

        
        // !revisar y repasar la prueba de este 
        
    test('Debe de mostrar un Quote', () => { 

        useFetch.mockReturnValue({
            data: [{ author: 'Chepito', quote:'Hola Micho'}],
            isLoading: false ,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        // screen.debug();
        expect( screen.getByText('Hola Micho') ).toBeTruthy();
        expect( screen.getByText('Chepito') ).toBeTruthy();

        const nextButton = screen.getByRole( 'button', { name: 'Next Quote' } ); 
        expect( nextButton.disabled ).toBeFalsy();


        })

        // !revisar y repasar la prueba de este tambien 

        // ! tarea superdifícil, revisarla nuevamente lo referente a ese test.

    test('Debe de llamar la función de incrementar', () => { 

        useFetch.mockReturnValue({
            data: [{ author: 'Chepito', quote:'Hola Micho'}],
            isLoading: false ,
            hasError: null
        });

        
        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole( 'button', { name: 'Next Quote' } ); 
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();


        })

 })