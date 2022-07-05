import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import CounterApp from './01-useState/CounterApp';
import CounterWithCustomHook from './01-useState/CounterWithCustomHook';
import FormCustomHook from './02-useEffect/FormCustomHook';
import SimpleForm from './02-useEffect/SimpleForm';
import MultipleCustomHooks from './03-examples/MultipleCustomHooks';
import { HooksApp } from './HooksApp';

import './index.css'


const container = document.getElementById('root');
const root = createRoot( container );
root.render(  < MultipleCustomHooks /> );
