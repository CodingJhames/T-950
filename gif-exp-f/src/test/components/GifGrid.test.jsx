import { render, screen } from "@testing-library/react";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");


describe('Pruebas en GifGrid', () => { 

    const category = 'Demon Slayer';

    test('Debe de mostrar el Loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( < GifGrid  category={category} /> );
        // screen.debug();
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(category));
     })

     test('Debe de mostrar items cuando se cargan las imagenes de useFecthGifs', () => { 

        const Gifs = [
            {
                id: 'ABC',
                title: 'Demon Slayer',
                url: 'https://localhost/Demon-Slayer.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/Goku.jpg'
            },

        ]

        useFetchGifs.mockReturnValue({
            images: Gifs,
            isLoading: false
        });

        render( < GifGrid  category={category} /> );
        // screen.debug();

        expect( screen.getAllByRole( 'img').length ).toBe(2);

      });

      

 })