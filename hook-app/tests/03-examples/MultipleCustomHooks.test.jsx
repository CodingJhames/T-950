import { render, screen } from "@testing-library/react"
import MultipleCustomHooks from "../../src/03-examples/MultipleCustomHooks";


describe('Pruebas en MultipleCustomHooks', () => { 

    test('Debe de mostrar el componente por defecto', () => { 

        render( <MultipleCustomHooks /> );
        // screen.debug();

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Breaking Bad Quotes') )

        const nextButton = screen.getByRole( 'button', { name: 'Next Quote' } ); 
        expect( nextButton.disabled ).toBeTruthy();


        })



 })