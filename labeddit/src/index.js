/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import  GlobalState  from './contexts/GlobalState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalState>
            <GlobalStyle />
            <App />
        </GlobalState>
    </React.StrictMode>
);
