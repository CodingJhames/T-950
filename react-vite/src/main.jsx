
import React from 'react';
import { createRoot } from 'react-dom/client';
// import { FirstApp } from './FirstApp';
import {CounterApp}  from './CounterApp';
// import { App } from "./HelloWorldApp";
import '../src/styles.css';



const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(

<React.StrictMode>
 <CounterApp value={100}/>
</React.StrictMode>
);


