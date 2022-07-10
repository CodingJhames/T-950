


const TodoItem = ( { todos ,onDeleteTodo } ) => {
  
  
    return (
    <>
    {
        todos.map( todo => (
            <li key={ todo.id } className="list-group-item d-flex justify-content-between"> 
                <span className="align-self-center">{ todo.description }</span>
                <button 
                className="btn btn-danger"
                onClick={ ( ) => onDeleteTodo( todo.id ) }
                >Borrar</button>
            </li>
        ))
    }
    </>
  )
}

export default TodoItem