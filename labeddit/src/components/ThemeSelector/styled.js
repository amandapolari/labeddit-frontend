import styled from 'styled-components';
import Box from '@mui/material/Box';

export const ContainerThemeSelector = styled(Box)`
    display: flex;
    justify-content: flex-end;
    // Adicione outras propriedades de estilo conforme necessário
    // ...

    // DESSA FORMA PROPAGA MAS NÃO LÊ AS PROPS CORRETAMENTE:
    /* .MuiIconButton-root { */
    /* color: ${({ darkMode }) => (darkMode ? 'red' : 'blue')}; */
    /* color: orange; */
    /* margin-left: 1rem; */
    // Adicione outras propriedades de estilo conforme necessário
    // ...
    /* } */
`;

export const ContainerIconButton = styled.div`
    color: ${({ darkMode }) => (darkMode ? 'red' : 'blue')};
`;
