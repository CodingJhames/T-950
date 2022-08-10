
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyqh69Uw9AqNWz-aKQoS3lGJzMASaCxdk",
  authDomain: "react-curso-e159b.firebaseapp.com",
  projectId: "react-curso-e159b",
  storageBucket: "react-curso-e159b.appspot.com",
  messagingSenderId: "143520830748",
  appId: "1:143520830748:web:df557bc0c0603a6eb0d6d9"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth( firebaseApp );
export const firebaseDB =  getFirestore(  firebaseApp );

