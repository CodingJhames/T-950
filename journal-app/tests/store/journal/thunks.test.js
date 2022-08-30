import { startNewNote } from "../../../src/store/journal/thunks";


describe('Pruebas en Journal Thunks', () => { 

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach( () => jest.clearAllMocks() );


    // ! para este test se debe de hacer una configuración en Firebase

    test('startNewNote Debe de crear una nueva nota en blanco', async() => {

        const uid = 'TEST-UID';
        getState.mockReturnValue( { auth: { uid: uid } } );

        await startNewNote()( dispatch, getState );





    });



});