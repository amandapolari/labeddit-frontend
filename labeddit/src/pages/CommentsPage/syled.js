import styled from 'styled-components';
import { theme } from '../../styles';

export const ContainerCommentsPage = styled.div``;
export const ContainerContentCommentsPage = styled.div`
    padding: 2rem;
`;

export const ContainerFormsCommentsPage = styled.div``;

export const TextareaCreateComment = styled.textarea`
    background-color: ${theme.palette.gray[4]};
    border: none;
    border-radius: 12px;
    min-height: 12vh;
    width: 90%;
    color: ${theme.palette.gray[2]};
    font-family: 'IBM Plex Sans';
    font-size: 1.1rem;
    padding: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0.5rem;
    /* display: flex;
    justify-content: center;
    align-items: center; */

    &:focus {
        outline: none;
    }
`;

export const BtnCreateComment = styled.button`
    background: ${theme.backgrounds[1]};
    width: 100%;
    border: none;
    border-radius: 12px;
    height: 2.9rem;
    color: ${theme.palette.white[1]};
    font-size: 0.9rem;
    font-family: 'Noto Sans';
    font-weight: 700;
`;

export const DivisorComments = styled.div`

    height: 1px;
    background: ${theme.backgrounds[1]};
    /* margin: 1rem 1rem ; */
    margin: 1rem 0;
    width: 100%;
`;

export const ContainerAlertCommentPage = styled.div`
    padding: 0 0 1rem 0.2rem;
    /* width: 90%;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 1rem; */
`;
