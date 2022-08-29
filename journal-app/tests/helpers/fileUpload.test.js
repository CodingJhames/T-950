import { fileUpload } from "../../src/helpers/fileUpload";


describe('Pruebas en fileUpload', () => { 

    test('Debe de subir el archivo correctamente a cloudinary', async() => { 

        const imageUrl = 'https://static.wikia.nocookie.net/slamdunk/images/a/a4/Sakuragi_%28antes%29.png/revision/latest?cb=20140808225504&path-prefix=es';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg' );
        
        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');

    })

});