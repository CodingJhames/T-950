
export const fileUpload = async( file ) => {
    if ( !file ) throw new Error('No tenemos ningún archivo a subir');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dlbkbeu2o/upload'; 

    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file', file );

    try {

        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        // console.log( resp );

        if ( !resp.ok ) throw new Error('No se pudo subir Imagen');

        const cloudResp = await resp.json();
        // console.log( cloudResp );
        return cloudResp;
        
    } catch (error) {
        console.log(error);
        throw new Error( error.message );
    }


}