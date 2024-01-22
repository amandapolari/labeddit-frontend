import styled from 'styled-components';
import { theme } from '../../styles';

export const ContainerContentCard = styled.div`
    display: grid;
    width: 75vw;
    padding: 1.5rem;
    margin-bottom: 1rem;
    background-color: ${theme.palette.gray[5]};
    border-radius: 12px;
    border: 1px solid ${theme.palette.gray[3]};
    /* grid-template-columns: repeat(7, 1fr); */
    grid-template-columns: 5vh 5vh 5vh 5vh 5vh 5vh 5vh;
    /* FUNCIONA BEM: */
    /* grid-template-rows: 12vw 20vw 1fr; */
    /* FUNCIONA MELHOR!!: */
    grid-template-rows: 0.2fr 0.5fr 0.2fr;
    /* align-items: center; */
    justify-content: center;
`;

export const TextCreatorContent = styled.p`
    color: ${theme.palette.gray[2]};
    text-align: center;
    font-family: 'IBM Plex Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    grid-column: 1/8;
    grid-row: 1/2;
    display: flex;
    justify-content: flex-start;
`;

export const ContainerTextContent = styled.div`
    grid-column: 1/7;
    grid-row: 2/3;
`;

export const ContentText = styled.p`
    color: ${theme.palette.black[1]};
    font-family: 'IBM Plex Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const ContainerButtons = styled.div`
    grid-column: 1/8;
    grid-row: 3/4;
    display: flex;
    align-items: flex-end;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 7vh 1fr;

    div {
        /* border: 1px solid red; */
    }
`;

export const ImageComment = styled.img`
    width: 2vh;

    /* width: 24px;
    height: 24px; */
    margin-right: 8px;
`;

export const IconVectorUp = styled.img`
    width: 2vh;
    /* height: 24px; */
    /* margin-right: 8px; */
`;

export const IconVectorDown = styled.img`
    width: 2vh;
    /* height: 24px; */
    /* margin-right: 8px; */
`;

export const ContainerLikesAndDislikes = styled.div`
    display: flex;
    width: 10vh;
    height: 4vh;
    padding: 0.5vh;
    margin: 0.5vh;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    border-radius: 28px;
    border: 0.797px solid ${theme.palette.gray[7]};
`;

export const ContainerImgComments = styled.div`
    display: flex;
    width: 5.5vh;
    height: 4vh;
    padding: 0.5vh 2vh;
    margin: 0.5vh;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    border-radius: 28px;
    border: 0.793px solid ${theme.palette.gray[7]};
`;

export const ContainerDeleteAndEdit = styled.div`
    display: flex;
    width: 6.5vh;
    height: 4vh;
    padding: 0.5vh 2vh;
    margin: 0.5vh;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    border-radius: 28px;
    border: 0.797px solid ${theme.palette.gray[7]};
`;

export const ContainerAlert = styled.div`
    grid-row: 2/3;
    grid-column: 1/8;
    align-items: center;
    padding: 1rem 1rem 0 1rem;
`;
