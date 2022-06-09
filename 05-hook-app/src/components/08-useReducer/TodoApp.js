
import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer'
import './styles.css'


const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]



export const TodoApp = () => {

    const [ tareas, dispatch ] = useReducer( todoReducer, initialState )

    console.log(tareas);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Nueva tarea');
    

    const newTarea = {
        id: new Date().getTime(),
        desc: 'Nueva Tarea',
        done: false
    }

    const action = {
        type: 'add',
        payload: 'newTarea'
    }

    dispatch( action );

    }

  return (
    <div>
        <h1>TodoApp ( { tareas.length })</h1>
        <hr></hr>

         
        <div className='row'>

            <div className='col-7'>
            <ul className='list-group list-group-flush'>
            {/* <li>Hola</li>
            <li>Mundo</li>
            <li>Hola de nuevo</li> */}

            {
                tareas.map( (tarea, i ) => (
                    <li
                    key={ tarea.id }
                    className="list-group-item"
                    > <p  className='text-center complete'>{ i +1 }. {tarea.desc}</p>
                    <button className='btn btn-danger'>Borrar</button>
                    </li>

                ))
            }

        </ul>
            </div>

            <div className='col-5'> 
            
            <h4>Agregar tarea</h4>
            <hr></hr>
            <form onSubmit={ handleSubmit }>
                <input
                className='form-control' 
                type="text"
                name="description" 
                placeholder='Aprender...'
                autoComplete='off'>
                </input>

                <button
                type='submit'
                className='btn btn-primary mt-3 btn-block'>
                    Agregar
                </button>
            </form>
            </div>
        </div>

    </div>
  )
}


