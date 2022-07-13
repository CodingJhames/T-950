import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import CounterApp from './01-useState/CounterApp';
import CounterWithCustomHook from './01-useState/CounterWithCustomHook';
import FormCustomHook from './02-useEffect/FormCustomHook';
import SimpleForm from './02-useEffect/SimpleForm';
import MultipleCustomHooks from './03-examples/MultipleCustomHooks';
import FocusScreeen from './04-useRef/FocusScreeen';
import Layout from './05-useLayoutEffect/Layout';
import CallBackHook from './06-memos/CallBackHook';
import MemoHook from './06-memos/MemoHook';
import Memorize from './06-memos/Memorize';
import { HooksApp } from './HooksApp';
import './08-useReducer/intro-reducer';

import './index.css'
import TodoApp from './08-useReducer/TodoApp';
import MainApp from './09-useContext/MainApp';


const container = document.getElementById('root');
const root = createRoot( container );
root.render(  
<BrowserRouter>
    < MainApp />
</BrowserRouter>
 );
