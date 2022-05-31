

// import ReactDOM from 'react-dom'


// const divRoot = document.querySelector('#root');

// const saludo = <h1> Hola Chepito</h1>

// ReactDOM.render( saludo, divRoot);

// console.log("Hola Micho");
// console.log(divRoot);

import { createRoot } from 'react-dom/client';
import PrimeraApp from './PrimeraApp';
import './index.css'



const saludo = <h1> Hola Micho</h1>

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

root.render( < PrimeraApp saludo="Hey Arnold!" />);

