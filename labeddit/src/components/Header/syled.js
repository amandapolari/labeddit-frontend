import styled from 'styled-components';
import { theme } from '../../styles';

export const ContainerHeaderComponent = styled.div`
    background-color: ${theme.palette.gray[6]};
    height: 6vh;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
`;

export const ImageLogo = styled.img`
    display: grid;
    justify-self: center;
    grid-column: 2/3;
    grid-row: 1/2;
    height: 4vh;
`;

export const ImageClose = styled.img`
    display: ${({ isCommentPage }) => (isCommentPage ? 'grid' : 'none')};
    justify-self: start;
    grid-column: 1/2;
    grid-row: 1/2;
    padding-left: 1.5rem;
`;

export const ButtonLogin = styled.button`
    background: none;
    border: none;
    color: ${theme.palette.blue[1]};
    font-family: 'Noto Sans';
    font-size: 1rem;
    display: ${({ isSignupPage }) => (isSignupPage ? 'grid' : 'none')};
    grid-column: 3/4;
    grid-row: 1/2;
`;

export const ButtonLogout = styled.button`
    display: ${({ isFeedOrCommentsPage }) =>
        isFeedOrCommentsPage ? 'grid' : 'none'};
    grid-column: 3/4;
    grid-row: 1/2;
    background: none;
    border: none;
    color: ${theme.palette.blue[1]};
    font-family: 'Noto Sans';
    font-size: 1rem;
`;
