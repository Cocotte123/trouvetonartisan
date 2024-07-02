import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListeContextProvider from './context/ListeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ListeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ListeContextProvider>
);


reportWebVitals();
