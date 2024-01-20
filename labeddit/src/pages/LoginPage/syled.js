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
*/

export const ContainerPageLogin = styled.div`
    padding: 1.5rem;
    border: 2px solid red;
    background: ${theme.palette.white.one};
    height: 94.5vh;
    display: flex;
    flex-direction: column;

    @media (min-width: 375px) {
        height: 94.4vh;
    }

    @media (min-width: 769px) {
        height: 92.6vh;
    }

    @media (min-width: 1024px) {
        height: 92.6vh;
    }
`;

export const SubtitleLogin = styled.h2`
    margin-top: 0;
    padding: 0;
    font-family: 'IBM Plex Sans';
    font-weight: 400;
    font-size: 0.8rem;

    color: ${theme.palette.black.one};
    @media (min-width: 769px) {
        font-size: 1rem;
    }

    @media (min-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const ContainerLogoAndTitle = styled.div`
    padding: 4rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;

    /* @media (min-width: 375px) {
        padding: 1.4rem;
    }

    @media (min-width: 769px) {
    }

    @media (min-width: 1024px) {
        padding: 2rem 2rem;
    } */
`;

export const ImageLogo = styled.img`
    width: 14vh;
    display: flex;

    /* @media (min-width: 375px) {
        width: 16vh;
    } */
`;

export const ContainerForms = styled.div`
    /* border: 2px solid blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    @media (min-width: 375px) {
    }

    @media (min-width: 769px) {
    }

    @media (min-width: 1024px) {
    }

    @media (min-width: 1200px) {
    }
`;

export const ButtonLoginPage = styled.button`
    margin-top: 4rem;
    background: ${theme.backgrounds.bg_btn_login};
    width: 80vw;
    border: none;
    border-radius: 2.5rem;
    height: 2.9rem;
    color: ${theme.palette.white.one};
    font-size: 0.9rem;
    font-family: 'Noto Sans';
    font-weight: 700;
`;

export const ButtonCreateAccount = styled.button`
    /* margin-top: 1rem; */
    border: 1px solid ${theme.palette.orange};
    color: ${theme.palette.orange};
    background: ${theme.palette.white.one};
    width: 80vw;
    border-radius: 2.5rem;
    height: 2.9rem;
    font-size: 0.9rem;
    font-family: 'Noto Sans';
    font-weight: 700;
`;

export const Hr = styled.hr`
    /* width: 80vw; */
    border: 1px solid ${theme.palette.orange};
    margin: 1rem 1rem;
`;
