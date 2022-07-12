import TodoItem from "./TodoItem"


export const TodoList = ( {todos = [], onDeleteTodo, onToggleTodo }) => {
    



  return (
    
        <ul className="list-group">
            {
                < TodoItem 
                todos={ todos } 
                onDeleteTodo={ id => onDeleteTodo( id ) }
                onToggleTodo={ onToggleTodo } />
            }            
        </ul>
   
  )
}

