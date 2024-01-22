import styled from 'styled-components';
import { theme } from '../../styles';

export const TextareaCreatePost = styled.textarea`
    background-color: ${theme.palette.gray[4]};
    border: none;
    border-radius: 12px;
    min-height: 12vh;
    /* width: 80vw; */
    width: 90%;
    color: ${theme.palette.gray[2]};
    font-family: 'IBM Plex Sans';
    font-size: 1.1rem;
    padding: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0;
`;

export const ContainerFeedpage = styled.div`
    /* border: 3px solid red; */
`;

export const ContainerContentFeedpage = styled.div`
    /* border: 3px solid green; */
    padding: 2rem;
`;

export const ContainerFormsFeedpage = styled.div`
    /* border: 3px solid red; */
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem; */

    form {
        /* border: 3px solid green; */
        margin-bottom: 2rem;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const DivisorFeed = styled.div`
    height: 1px;
    background: ${theme.backgrounds[1]};
    margin: 1rem 1rem;
    width: 90%;
`;

export const BtnCreatePost = styled.button`
    background: ${theme.backgrounds[1]};
    width: 99%;
    border: none;
    border-radius: 12px;
    height: 2.9rem;
    color: ${theme.palette.white[1]};
    font-size: 0.9rem;
    font-family: 'Noto Sans';
    font-weight: 700;
`;
