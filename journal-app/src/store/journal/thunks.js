import { async } from "@firebase/util";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes } from "./";


export const startNewNote = () => {

    return async( dispatch, getState ) => {


        dispatch( savingNewNote()  );

        const { uid } = getState().auth;

        // console.log('start new Note');
        // console.log( getState() );
        
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` )  );
        await setDoc(  newDoc, newNote );

        // console.log( {newDoc, setDocResp } );

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );

    }

}

export const startLoadingNotes = () => {

    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        if( !uid ) throw new Error('El UID del usuario no existe');
        // console.log({uid});

        const notes = await loadNotes( uid );

        dispatch( setNotes( notes  )  );

        
    }
}
