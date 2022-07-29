import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth/context"
import PublicRoute from "../../src/router/PublicRoute"

describe('Pruebas es PublicRoute', () => { 

    test('Debe de mostrar el children si no está autenticado', () => { 

        const contextvalue = {
            logged: false,
        }

        render( 
        < AuthContext.Provider value={ contextvalue }>
            < PublicRoute>
                <h1>Ruta Publica</h1>
            </PublicRoute>
        </AuthContext.Provider>  )

        expect( screen.getByText('Ruta Publica')).toBeTruthy();

    })

    test('Debe de navegar ni está autenticado', () => { 

        const contextvalue = {
            logged: true,
            user: {
                name: 'Micho',
                id: 'ABC123'
            }
        }

        render( 
        < AuthContext.Provider value={ contextvalue }>
            <MemoryRouter initialEntries={['/login']}>

                <Routes>

                    <Route path='login' element={
                        < PublicRoute>
                            <h1>Ruta Publica</h1>
                        </PublicRoute>
                    } />

                    <Route path='marvel' element={ <h1>Página Marvel</h1>} />

                </Routes>

            </MemoryRouter>
            
        </AuthContext.Provider>  )

        expect(  screen.getByText( 'Página Marvel' ) ).toBeTruthy();

        })

});


