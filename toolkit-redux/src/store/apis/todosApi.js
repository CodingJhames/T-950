
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// ? clase de Redux RTK Query con la que fernando dice que de pronto reemplace axios


export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: ( builder ) => ( {

        getTodos: builder.query({
            query: () => '/todos'
        })



    } ) 


})


export const { useGetTodosQuery  } = todosApi;