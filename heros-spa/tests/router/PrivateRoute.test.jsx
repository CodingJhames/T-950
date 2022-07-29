import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth/context';
import PrivateRoute from '../../src/router/PrivateRoute';


describe('Pruebas en PrivateRoute', () => { 

    test('Debe de mostrar el children si está autenticado', () => { 

        Storage.prototype.setItem = jest.fn();

        const contextvalue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Parchita'
            }
        }

        render( 
        < AuthContext.Provider value={ contextvalue }>
            <MemoryRouter initialEntries={ ['/search?q=batman']} >

                < PrivateRoute >
                    <h1>Ruta Privada</h1>
                </PrivateRoute>

            </MemoryRouter>


        </AuthContext.Provider>  )

        expect( screen.getByText('Ruta Privada')).toBeTruthy();
        expect(  localStorage.setItem ).toHaveBeenCalledWith( 'lastPath', '/search?q=batman');

    })





    })
