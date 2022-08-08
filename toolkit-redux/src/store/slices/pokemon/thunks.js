import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

// ? un thunk es una función que regresa una tarea asincrona
// ? la cual se va a ejecutar para poder realizar las diferentes acciones

export const getPokemons = ( page = 0  ) => {

    return ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        //  Todo: realizar peticiones http



        // dispatch( setPokemons()  );

    }


}
