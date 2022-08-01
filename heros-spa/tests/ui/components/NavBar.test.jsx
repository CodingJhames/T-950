import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context";
import { Navbar } from "../../../src/ui/components/Navbar";

const mockedUseNavigate = jest.fn();


jest.mock("react-router-dom", () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
})   );


describe('Pruebas en NavBar', () => { 

    const contextValue = {
        logged: true,
        user: {
            name: 'Parchita'
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks()  );


    test('Debe de mostrar el nombre del user loggeado', () => { 

        
        

        render(

            <MemoryRouter>
                <AuthContext.Provider value={  contextValue }>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>

        );

        
        expect( screen.getByText('Parchita' )).toBeTruthy();


        })


    test('Debe de llamar el logout y navigate cuando se hace click en el botón', () => { 

        render(

            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>

        );
        
        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect( contextValue.logout  ).toHaveBeenCalled();
        expect( mockedUseNavigate  ).toHaveBeenCalledWith("/login", {"replace": true});



        })


    })