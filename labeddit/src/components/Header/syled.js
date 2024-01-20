import styled from 'styled-components';
import { theme } from '../../styles';

export const ContainerHeaderComponent = styled.div`
    border: 2px solid red;
    background-color: ${theme.backgrounds.bg_page_white};
    height: 6vh;
    width: 100vw;
    /* display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
`;

// export const ButtonLogin = styled.button`
//     border: none;
//     border-radius: 5px;
//     padding: 0.5em 1em;
//     font-size: 1em;
//     font-weight: 700;
//     cursor: pointer;
//     transition: 0.3s;
//     &:hover {
//     }
// `;

export const ImageClose = styled.img`
    display: ${({ isCommentPage }) => (isCommentPage ? 'grid' : 'none')};
`;

export const ButtonLogin = styled.button`
    display: ${({ isSignupPage }) => (isSignupPage ? 'grid' : 'none')};
`;

export const ButtonLogout = styled.button`
    display: ${({ isFeedOrCommentsPage }) =>
        isFeedOrCommentsPage ? 'grid' : 'none'};
`;
