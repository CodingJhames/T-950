import TodoItem from "./TodoItem"


export const TodoList = ( {todos = [], onDeleteTodo }) => {
    



  return (
    
        <ul className="list-group">
            {
                < TodoItem todos={ todos } onDeleteTodo={ id => onDeleteTodo( id ) } />
            }            
        </ul>
   
  )
}

