import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import File from './File';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <File/>
  </React.StrictMode>
);
