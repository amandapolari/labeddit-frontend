import styled from 'styled-components';
import { darkTheme, lightTheme } from '../../styles/index';

// console.log(darkTheme);

export const ContainerPageLogin = styled.div`
    border: 1px solid red;
    background: ${({ darkMode }) =>
        darkMode ? darkTheme.palette.black.one : lightTheme.palette.white.one};
`;
