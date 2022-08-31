
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from "../helpers/getEnvironments";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();
// console.log( env );



// Your web app's Firebase configuration Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyDyqh69Uw9AqNWz-aKQoS3lGJzMASaCxdk",
//   authDomain: "react-curso-e159b.firebaseapp.com",
//   projectId: "react-curso-e159b",
//   storageBucket: "react-curso-e159b.appspot.com",
//   messagingSenderId: "143520830748",
//   appId: "1:143520830748:web:df557bc0c0603a6eb0d6d9"
// };

// ? Testing

// const firebaseConfig = {

//   apiKey: "AIzaSyAWKzsIJs8iIa9NLGXpoTjp4x08e6mEhVw",
//   authDomain: "react-test-3ac3a.firebaseapp.com",
//   projectId: "react-test-3ac3a",
//   storageBucket: "react-test-3ac3a.appspot.com",
//   messagingSenderId: "295198373230",
//   appId: "1:295198373230:web:0ba9b2e169a300c1c43d7f"

// };


const firebaseConfig = {

  apiKey: VITE_APIKEY,
  authDomain:  VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,

};

console.log( firebaseConfig );


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB =  getFirestore(  FirebaseApp );

