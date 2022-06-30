export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${category}&api_key=BsW6v8H74iBT4mTYmspQQnvmzK5DaDQ6`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}