import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Pruebas en useFetchGifs', () => { 

    test('Debe de regresar el estado incial', () => { 

        const { result } = renderHook( () => useFetchGifs( 'Demon Slayer') );
        const { images, isLoading } = result.current;
        // console.log( result );

        expect( images.length ).toBe(0);
        expect( isLoading).toBeTruthy();

     })

    test('Debe de retornar un arreglo de imágenes y isLoading en false',async() => { 

        const { result } = renderHook( () => useFetchGifs( 'Demon Slayer') );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
      
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading).toBeFalsy();



     })



 })