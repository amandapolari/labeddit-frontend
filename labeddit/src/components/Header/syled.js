import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeaderStyled = styled.div`
    height: 10vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.gray['500']};
`;

export const ButtonLogin = styled.button`
    border: none;
    border-radius: 5px;
    padding: 0.5em 1em;
    font-size: 1em;
    font-weight: 700;
    color: ${theme.colors.blue['500']};
    cursor: pointer;
    transition: 0.3s;
    &:hover {
    }
`;
