import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
