import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Reset from './styles/Reset.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset/>
    <App />
  </React.StrictMode>,
)
