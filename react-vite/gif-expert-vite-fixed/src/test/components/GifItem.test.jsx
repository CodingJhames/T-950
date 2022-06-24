
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('Pruebas en GifItem', () => { 

    const title = 'Demon Slayer';
    const url   = 'https://demon-slayer.com/demon-slayer.jpg';

    test('Debe de hacer match con el snapshot', () => { 

       const {container} = render( < GifItem title={title} url={url} />);
       expect( container ).toMatchSnapshot();

     }) 


     test('Debe de mostrar la imagen con el URL y el Alt indicado', () => { 

      render( < GifItem title={title} url={url} />);
      // screen.debug();

      // expect( screen.getByRole('img').src).toBe( url );
      // expect( screen.getByRole('img').alt).toBe( title );

      /* aqui fernando sugiere que seguir esa manera de una en una sería muy
      larga y acumularía muchos expects para estar evaluando pruebas */

      const { src, alt  } =  screen.getByRole('img');
      expect( src ).toBe( url );
      expect( alt ).toBe( alt );

      })

      test('Debe de mostrar el título en el componente', () => { 

        render( < GifItem title={title} url={url} />);

        expect( screen.getAllByText( title) ).toBeTruthy();

       });

 });