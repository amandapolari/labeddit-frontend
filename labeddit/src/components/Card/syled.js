import styled from 'styled-components';
import { theme } from '../../styles';

export const ContainerContentCard = styled.div`
    /* border: 1px solid red; */
    display: flex;
    width: 364px;
    padding: 9px 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
`;

export const TextCreatorContent = styled.p`
    color: ${theme.palette.gray[2]};
    text-align: center;
    font-family: 'IBM Plex Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const ContainerButtons = styled.div`
    /* border: 1px solid red; */
    display: flex;
`;

export const ImageComment = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 8px;
`;

export const IconVectorUp = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 8px;
`;

export const IconVectorDown = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 8px;
`;
