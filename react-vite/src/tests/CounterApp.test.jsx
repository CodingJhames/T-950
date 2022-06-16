const { render, screen, fireEvent } = require("@testing-library/react");
import { CounterApp } from "../CounterApp";

describe('Pruebas en CounterApp', () => { 
    
    const initialValue = 10;

    test('Debe de hacer match con el Snapshot', () => { 

        const { container } = render( <CounterApp value={ initialValue } /> );
        expect( container ).toMatchSnapshot();

     })

     test('Debe de mostrar el valor incial de 100', () => { 

        render( <CounterApp value={ 10 } /> );
        expect( screen.getByText ).toBeTruthy();


      })

    test('Debe de incrementar con el botón +1', () => { 

        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('11') ).toBeTruthy();

    })  

    test('Debe de incrementar con el botón -1', () => { 

        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') )
        expect( screen.getByText('9') ).toBeTruthy();

    })  


    test('Debe de funcionar el botón de reset', () => { 

        render( <CounterApp value={ 100 } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );u
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset'}));

        expect( screen.getByText( 100 ) ).toBeTruthy();




     })

 })
