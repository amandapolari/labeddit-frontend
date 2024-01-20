import styled from 'styled-components';
import { darkTheme, lightTheme } from '../../styles';

export const ContainerPageSignup = styled.div`
    border: 2px solid red;
    height: 100vh;
    background: ${({ darkMode }) =>
        darkMode
            ? darkTheme.backgrounds.bg_page_gray_one
            : lightTheme.palette.white.one};
`;
