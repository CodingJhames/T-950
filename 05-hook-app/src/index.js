import React from 'react';
import { createRoot } from 'react-dom/client';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import SimpleForm from './components/02-useEffect/SimpleForm';
// import {MultipleCustomHooks} from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import RealEXampleRef from './components/04-useRef/RealEXampleRef';
// import { Layout } from './components/05-useLayoutEffect/LayoutEffect';
import Memorize from './components/06-memos/Memorize';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render( < Memorize /> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

