import { Router } from './routes';
import { useContext } from 'react';
import { ThemeProvider } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';

import { darkTheme, lightTheme } from './styles/theme';
import GlobalContext from './contexts/GlobalContext';

const App = () => {
    const context = useContext(GlobalContext);
    const { darkMode } = context;

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Router />
        </ThemeProvider>
    );
};

export default App;
