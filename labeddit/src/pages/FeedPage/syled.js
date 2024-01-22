import styled from 'styled-components';
import { theme } from '../../styles';

export const TextareaCreatePost = styled.textarea`
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
    margin-bottom: 0;
    &:focus {
        outline: none;
    }
`;

export const ContainerFeedpage = styled.div``;

export const ContainerContentFeedpage = styled.div`
    padding: 2rem;
`;

export const ContainerFormsFeedpage = styled.div`
    form {
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
