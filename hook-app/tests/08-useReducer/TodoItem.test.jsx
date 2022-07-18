import { render, screen } from "@testing-library/react";
import TodoItem from "../../src/08-useReducer/TodoItem";

describe('Pruebas en TodoItem', () => { 

    const todo = {
        id:1,
        description: 'Piedra del Alma',
        donde: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks()  );


    test('Debe de mostrar el Todo pendiente de completar', () => { 

        render( <TodoItem 
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock  } 
            onDeleteTodo={ onDeleteTodoMock } />  
        );

        const liElement = screen.getByRole( 'listitem' );
        // console.log(liElement.innerHTML);

        expect( liElement.className ).toBe( 'list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        console.log( spanElement.className );
        expect( spanElement.className ).toContain( 'align-self-center');

        // ! aquí toca tener en cuenta el detalle del espacio " " que se hace en el
        // ! 'align-self-center' cuando ya se hace la aserción, sino sale error.
    })

})