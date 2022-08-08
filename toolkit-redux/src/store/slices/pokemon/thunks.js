import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

// ? un thunk es una función que regresa una tarea asincrona
// ? la cual se va a ejecutar para poder realizar las diferentes acciones

export const getPokemons = ( page = 0  ) => {

    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        //  Todo: realizar peticiones http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`)
        // const data = await resp.json();
        // console.log(data);

        // ? método con Axios

        const {  data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        console.log( data );

        dispatch( setPokemons( { pokemons: data.results, page: page + 1  } )  );

    }


}
