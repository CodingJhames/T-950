import React from 'react';
import { createRoot } from 'react-dom/client';
import { CounterApp } from './components/01-useState/CounterApp';
import { HookApp } from './HookApp';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<CounterApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

