import { async } from "@firebase/util";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload } from "../../helpers/fileUpload";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, noteUpdated,setPhotosToActiveNote, deleteNoteById } from "./";


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

export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

    const { uid } = getState().auth;
    const { active:note } = getState().journal;

    const noteToFirestore = {...note};
    delete noteToFirestore.id;  
    // ? Fernando usa el delete para eliminar el id del objeto notetofirestore para que firestore no lo vuelva a crear

    // console.log( noteToFirestore );

    const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
    await setDoc(  docRef, noteToFirestore, { merge: true } );

    dispatch( noteUpdated( note ) );

    }
}

export const startUploadingFiles = ( files = []  ) => {

    return async( dispatch ) => {
        dispatch( setSaving() );

        // console.log(files);
        // await fileUpload( files[0] );

        const fileUploadPromises = [];
        for (const file of files ) {
            fileUploadPromises.push( fileUpload( file ) );
        }

        const photosUrls = await Promise.all( fileUploadPromises );
        // console.log( photosUrls );

        dispatch( setPhotosToActiveNote( photosUrls ) );
  
    }
}


export const startDeletingNote = () => {
    return async( dispatch, getState ) => {

        const {uid} = getState().auth;
        const {active:note} = getState().journal;

        // console.log( uid, note );

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}` );
        await deleteDoc( docRef );
        // console.log({resp});

        dispatch( deleteNoteById( note.id ) );

    }
}