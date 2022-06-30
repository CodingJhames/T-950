import { render, screen } from "@testing-library/react";
import GifGrid from "../../components/GifGrid";


describe('Pruebas en GifGrid', () => { 

    const category = 'Demon Slayer';

    test('Debe de mostrar el Loading inicialmente', () => { 

        render( < GifGrid  category={category} /> );
        // screen.debug();
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(category));
     })

     test('Debe de mostrar items cuando se cargan las imagenes de useFecthGifs', () => { 

        

      })


 })