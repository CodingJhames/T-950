// import { useEffect } from "react";
// import { useReducer } from "react";
import useTodos from "../hooks/useTodos";
import TodoAdd from "./TodoAdd";


import { TodoList } from "./TodoList";
// import { todoReducer } from "./todoReducer";


/* hacer el custom hook useTodo, el cual debería de exponer: todos, handleNewTodo, handleDeleteTodo, handleToggleTodo    */




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


const TodoApp = () => {

    const {todos,todosCount,pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();  
   
  return (

    <>
        <h1> ToDoApp: {todosCount} <small>pendientes: { pendingTodosCount} </small></h1>
        <hr></hr>

        <div className="row">
            <div className="col-7">

                < TodoList 
                todos={todos} 
                onDeleteTodo={  id => ( handleDeleteTodo(id) )} 
                onToggleTodo={ id => ( handleToggleTodo(id) )} />

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