

const LoadMovie = async () => {

	try {

		const resp = await fetch( "https://api.themoviedb.org/3/movie/popular?api_key=ce1e93145e789196b239204202b0a621");	
		console.log(resp);

		if ( resp.status === 200) {
			const data = await resp.json();

			let movies = '';
			data.results.forEach( movie => {
				// console.log(movie.title);
				movies = movies + "<h1>Hola micho</h1>"
				
			});

			document.getElementById('contenedor').innerHTML = movies;
		} else if( resp.status === 401 ) {
			console.log("Error with the key")
		}else if( resp.status === 404 ){
			console.error( "Movie Don't exist" );
		} else {
			console.warn("the error can't be recognized");
		}

		
	} catch (error) {
		console.log(error)
	}

	
}

LoadMovie();