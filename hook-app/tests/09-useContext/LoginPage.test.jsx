import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import LoginPage from "../../src/09-useContext/LoginPage"




describe('Pruebas es LoginPage', () => { 


    test('Debe de mostrar el componente sin el usuario', () => { 

        render(  
        
        <UserContext.Provider value={ { user: null } }>
            <LoginPage /> ;
        </UserContext.Provider>
        )
        
        // screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');


    })

    test('Debe de llamar el setUser cuando se hace click', () => { 

        const setUserMock = jest.fn();

        render(  
        
            <UserContext.Provider value={ { user: null, setUser: setUserMock } }>
                <LoginPage /> ;
            </UserContext.Provider>
            )
        
            const btnElement = screen.getByRole('button');
            fireEvent.click( btnElement );
            
            expect(setUserMock ).toHaveBeenCalledWith( {"email": "Parchita@gmail.com", "id": 123, "nombre": "Parchita"} );
    })


})



