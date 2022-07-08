
export const todoReducer = ( initialState = [], action ) => {

    switch (action.type) {
        case 'ABC':
            throw new Error( 'Action.type no está implementada');
            
       
    
        default:
            return initialState;
    }

}