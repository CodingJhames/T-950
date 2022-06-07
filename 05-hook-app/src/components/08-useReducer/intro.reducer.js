
const initialState = [{
    id: 1,
    todo: 'comprar pan',
    done: false

}];

const todoReducer = ( state = initialState, action ) => {

    if ( action?.type === 'agregar') {
        return [ ...state, action.payload ];
    }

    return state;

}

let tareas = todoReducer();


const newTodo = {
    id: 2,
    todo: 'comprar chele',
    done: false

};

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

tareas = todoReducer( tareas,  agregarTodoAction );

console.log(tareas);


















