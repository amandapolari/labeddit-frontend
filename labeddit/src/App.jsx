import { Router } from './routes';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles';

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Router />
            <p>Projeto funcionando!</p>
        </ChakraProvider>
    );
};

export default App;
