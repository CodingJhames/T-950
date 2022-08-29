import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name:'dlbkbeu2o',
    api_key:'353312963181473',
    api_secret:'hJ5yQsMDxxfmGDrMiXKsHNXoK5U',
    secure: true

});


describe('Pruebas en fileUpload', () => { 

    test('Debe de subir el archivo correctamente a cloudinary', async() => { 

        const imageUrl = 'https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg' );
        
        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');

        // console.log(url);

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg', '');

        const cloudResp = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image'
        });

        // console.log(cloudResp);
    });

    test('Debe de retornar null', async() => { 

        const file = new File([], 'foto.jpg' );
        const url = await fileUpload( file );
        expect( url ).toBe(null);

    })


});