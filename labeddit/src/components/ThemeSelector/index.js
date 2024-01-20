import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
// import Box from '@mui/material/Box';
import { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import { ContainerIconButton, ContainerThemeSelector } from './styled';

export const ThemeSelector = () => {
  const context = useContext(GlobalContext);
  const { toggleDarkMode, darkMode } = context;
  return (
    <ContainerThemeSelector>
      <ContainerIconButton onClick={toggleDarkMode} darkMode={darkMode}>
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </ContainerIconButton>
    </ContainerThemeSelector>
  );
};
