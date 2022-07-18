import TodoItem from "./TodoItem"


export const TodoList = ( {todos = [], onDeleteTodo, onToggleTodo }) => {
    
return (  
        // <ul className="list-group">
        //     {
        //         < TodoItem 
        //         todos={ todos } 
        //         onDeleteTodo={ id => onDeleteTodo( id ) }
        //         onToggleTodo={ onToggleTodo } />
        //     }            
        // </ul>

        // ! esta es la correción que hice para que luego pasara los tests

        <ul className="list-group">

         {
          todos.map( todo => (
            <TodoItem key={ todo.id } todo={ todo }/>
          ) )
         }

        </ul> 
    )
}

