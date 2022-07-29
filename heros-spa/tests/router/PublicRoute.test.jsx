import { render, screen } from "@testing-library/react"
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

        


        })

});