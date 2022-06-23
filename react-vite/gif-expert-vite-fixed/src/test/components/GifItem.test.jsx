
import { render } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('Pruebas en GifItem', () => { 

    const title = 'Demon Slayer';
    const url   = 'https://demon-slayer.com/demon-slayer.jpg';

    test('Debe de hacer match con el snapshot', () => { 

       const {container} = render( < GifItem title={title} url={url} />)
       expect( container ).toMatchSnapshot();

     }) 


 });