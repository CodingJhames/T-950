import { any } from "prop-types";
import { getGifs } from "../../helpers/getGifs"

    
    
    describe('Puebas en getGifs', () => { 

        test('Debe de retornar un arreglo de Gifs', async() => { 

            const Gifs = await getGifs();
            // console.log( Gifs );
            expect( Gifs.length).toBeGreaterThan(0);
            expect( Gifs[0]).toEqual({
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String)
            })        

         }) 

     })