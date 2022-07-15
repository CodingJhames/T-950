import { act, renderHook } from "@testing-library/react"
import { any } from "prop-types";
import { useForm } from "../../src/hooks/useForm";



describe('Pruebas en useForm', () => { 

    const initialForm = {
        name:'Chepito',
        email:'Chepito@mail.com'
    };

    test('Debe de regresar los valores por defecto', () => { 

        const { result } = renderHook( () => useForm( initialForm ) );
        
        expect( result.current ).toEqual({
            name: 'Chepito',
            email: 'Chepito@mail.com',
            formState: { name: 'Chepito', email: 'Chepito@mail.com' },
            onInputChange: expect.any( Function ) ,
            onResetForm: expect.any( Function )
        })
    });

    test('Debe de cambiar el nombre del formulario', () => { 

        const newValue = 'Micho';
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange } = result.current;
        
        act( () => {
            onInputChange( { target: { name:'name', value: newValue}} );
            }
        )
            
            expect( result.current.name ).toBe( newValue );
            expect( result.current.formState.name ).toBe( newValue );
            
    })

    test('Debe de hacer el reset del formulario', () => { 

        const newValue = 'Micho';
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange, onResetForm } = result.current;
        
        act( () => {
            onInputChange( { target: { name:'name', value: newValue}} );
            onResetForm();
            }
        )
            
            expect( result.current.name ).toBe( initialForm.name );
            expect( result.current.formState.name ).toBe( initialForm.name );
            
    })

    })
