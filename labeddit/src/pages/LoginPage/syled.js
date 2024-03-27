import styled from 'styled-components';
import { theme } from '../../styles/index';

/* RESPONSIVIDADE:

    @media (min-width: 375px) {
     
    }

    @media (min-width: 769px) {
     
    }

    @media (min-width: 1024px) {
       
    }

    @media (min-width: 1200px) {
        
    }


    Para telas maiores que 1200px
    @media (min-width: 1200px) {

    }
*/

export const ContainerPageLogin = styled.div`
    padding: 1.3rem;
    background: ${theme.palette.white[1]};
    /* height: 94.5vh; */
    display: flex;
    flex-direction: column;
    align-items: center;

    /* @media (min-width: 375px) {
        height: 94.4vh;
    }

    @media (min-width: 769px) {
        height: 92.6vh;
    }

    @media (min-width: 1024px) {
        height: 92.6vh;
    }

    @media (min-width: 1200px) {
    } */
`;

export const SubtitleLogin = styled.h2`
    margin-top: 0;
    margin-bottom: 10vh;
    padding: 0;
    font-family: 'IBM Plex Sans';
    font-weight: 400;
    font-size: 0.8rem;
    color: ${theme.palette.black[1]};

    @media (min-width: 769px) {
        font-size: 1rem;
    }

    @media (min-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const ContainerLogoAndTitle = styled.div`
    padding: 3rem 3rem 1rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;

    @media (min-width: 769px) {
        /* border: red solid 7px; */
        /* font-size: 1rem; */
        /* padding: 3rem 3rem 1rem 3rem; */
    }

    @media (min-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const ImageLogo = styled.img`
    width: 14vh;
    display: flex;
`;

export const ContainerContentLogin = styled.div`
    @media (min-width: 1200px) {
        form {
            /* height: 92.6vh; */
            width: 40vw;
            /* margin: 0 auto; */
        }
    }
`;

export const ContainerForms = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    /* border: red solid 7px; */
    /* margin-top: 10vh; */
    /* margin-top: 8vh; */

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 375px) {
        /* border: red solid 7px; */
        /* margin-top: 3vh; */
    }

    @media (min-width: 769px) {
    }

    @media (min-width: 1024px) {
    }

    @media (min-width: 1200px) {
        /* border: blue solid 2px; */
    }

    /* === */
    @media (min-width: 769px) {
        margin-top: 2vh;
    }

    @media (min-width: 1200px) {
        margin-top: 0;
        padding: 1rem;
    }
`;

export const ButtonLoginPage = styled.button`
    margin-top: 6.5rem;
    background: ${theme.backgrounds[1]};
    width: 80vw;
    border: none;
    border-radius: 12px;
    height: 2.9rem;
    color: ${theme.palette.white[1]};
    font-size: 0.9rem;
    font-family: 'Noto Sans';
    font-weight: 700;

    @media (min-width: 1200px) {
        width: 40vw;
        /* border: solid red 1px; */
    }
`;

export const ButtonCreateAccount = styled.button`
    border: 1px solid ${theme.palette.orange[1]};
    color: ${theme.palette.orange[1]};
    background: ${theme.palette.white[1]};
    width: 80vw;
    border-radius: 12px;
    height: 2.9rem;
    font-size: 0.9rem;
    font-family: 'Noto Sans';
    font-weight: 700;

    @media (min-width: 1200px) {
        width: 40vw;
        /* border: solid red 1px; */
    }
`;

export const DivisorLoginPage = styled.div`
    height: 1px;
    background: ${theme.backgrounds[1]};
    margin: 1rem 1rem;
    width: 100%;
`;

export const ContainerButtonsLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 375px) {
    }

    /* @media (min-width: 769px) {
        button {
            width: 91vh;
        }
    } */

    @media (min-width: 1024px) {
    }

    @media (min-width: 1200px) {
    }

    @media (min-width: 1200px) {
        width: 40vw;
        /* border: solid red 1px; */
    }
`;

export const ContainerAlertLogin = styled.div`
    width: 80vw;
    position: absolute;

    @media (min-width: 1200px) {
        width: 40%;
    }
`;
