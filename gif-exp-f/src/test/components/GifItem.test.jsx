import { render } from "@testing-library/react"
import { GifItem } from "../../components"



describe('Pruebas en GifItem', () => { 

    const title = 'Demon Slayer';
    const url   = `https://www.Demon-slayer.com/Demon-Slayer`;

    test('Debe de hacer match con el snapshot', () => { 

        const { container } = render( <GifItem title={title} url={url} /> );
        expect( container).toMatchSnapshot();



     })

 })