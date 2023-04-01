// IMPORT REACT & CREATEROOT
import React from 'react';
import { createRoot } from 'react-dom/client';

// IMPORT APP COMPONENT
import App from './App';

// IMPORT STYLE
import './css/style.css';

// ROOT RENDER
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
