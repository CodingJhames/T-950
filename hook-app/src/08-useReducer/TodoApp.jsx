import { useEffect } from "react";
import { useReducer } from "react";
import TodoAdd from "./TodoAdd";


import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

// const initialState = [
//     {
//         id: new Date().getTime(),
//         description: 'Recolectar la piedra del Alma',
//         done:false,
//     },
//     {
//         id: new Date().getTime() * 3,
//         description: 'Recolectar la piedra del Power',
//         done:false,
//     }
// ]

const initialState = []

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

    const [todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
        
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
      
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        // console.log({ todo });

        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
             
        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {

        // console.log({ id  });

        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });

    }

  return (

    <>
        <h1> ToDoApp: <small>pendientes: 2 </small></h1>
        <hr></hr>

        <div className="row">
            <div className="col-7">

                < TodoList todos={todos} onDeleteTodo={  id => ( handleDeleteTodo(id) )} />

            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr></hr>

                {/* TodoAdd */}
                < TodoAdd onNewTodo={ handleNewTodo } />
                {/* Fin TodoAdd */}
            </div>

        </div>

        

        


    </>
  )
}

export default TodoApp