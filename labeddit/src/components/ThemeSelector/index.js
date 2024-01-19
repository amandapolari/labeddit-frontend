import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
// import Box from '@mui/material/Box';
import { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import {
    ContainerIconButton,
    ContainerThemeSelector,
} from './styled';

export const ThemeSelector = () => {
    const context = useContext(GlobalContext);
    const { toggleDarkMode, darkMode } = context;
    return (
        <ContainerThemeSelector>
            {/* {darkMode ? <p>Modo escuro</p> : <p>Modo claro</p>} */}
            {/* {console.log(darkMode)} */}

            {/* /* FUNCIONA*/}
            {/* <StyledIconContainer darkMode={darkMode} onClick={toggleDarkMode}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </StyledIconContainer> */}
            {/* /* FUNCIONA*/}

            <ContainerIconButton onClick={toggleDarkMode} darkMode={darkMode}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </ContainerIconButton>

            {/* <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color="inherit">
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton> */}

            {/* // TESTE: */}

            {/* <IconButton onClick={toggleDarkMode} darkMode={darkMode}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton> */}
        </ContainerThemeSelector>
    );
};
