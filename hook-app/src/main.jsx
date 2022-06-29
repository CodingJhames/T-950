import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { HooksApp } from './HooksApp';

import './index.css'


const container = document.getElementById('root');
const root = createRoot( container );
root.render(  <HooksApp /> );
