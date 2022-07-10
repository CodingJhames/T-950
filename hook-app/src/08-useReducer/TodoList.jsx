import TodoItem from "./TodoItem"


export const TodoList = ( {todos = [] }) => {
    
  return (
    
        <ul className="list-group">
            {
                < TodoItem todos={ todos } />
            }            
        </ul>
   
  )
}

