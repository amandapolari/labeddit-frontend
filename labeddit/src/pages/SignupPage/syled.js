import styled from 'styled-components';
import { theme } from '../../styles';

export const ContainerPageSignup = styled.div`
    height: 100vh;
    background: ${theme.palette.white[1]};
`;

export const ContainerContentSignup = styled.div`
    padding: 1rem;

    @media (min-width: 769px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50vw;
        margin: 0 auto;
        form {
            height: 92.6vh;
            width: 50vw;
            margin: 0 auto;
        }
    }
`;

export const TextApresentation = styled.p`
    font-size: 2rem;
    font-family: 'IBM Plex Sans';
    font-weight: 700;
    text-align: left;
    margin-bottom: 10rem;

    @media (min-width: 769px) {
        width: 100%;
        padding: 1rem;
        margin-left: 1rem;
        margin-bottom: 0.1rem;
        display: flex;
        justify-content: left;
    }
`;

export const ContainerFormsSignup = styled.div`
    display: flex;
    padding: 0 1.6rem 1.6rem 1.6rem;
    align-items: center;
    justify-content: center;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 769px) {
        width: 100%;
        form {
            button {
                width: 91vh;
            }
        }
    }
`;

export const ContainerTermsOfUse = styled.div`
    padding: 0.4rem;
    margin-top: 5rem;
    font-family: 'IBM Plex Sans';
    font-weight: 400;
    font-size: 0.9rem;
`;

export const ContainerCheckbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
`;

export const InputCheckbox = styled.input``;

export const LabelInputCheckbox = styled.label`
    margin-left: 0.5rem;
`;

export const BtnCreateAccount = styled.button`
    margin-top: 1rem;
    background: ${theme.backgrounds[1]};
    width: 80vw;
    border: none;
    border-radius: 12px;
    height: 2.9rem;
    color: ${theme.palette.white[1]};
    font-size: 0.9rem;
    font-family: 'Noto Sans';
    font-weight: 700;
`;

export const MessageAlertCheckbox = styled.p`
    position: absolute;
    width: 81vw;
    margin-top: 3rem;
`;

export const MessageAlertInputs = styled.p`
    padding: 0 2.05rem 1rem 1.4rem;
    position: absolute;
    top: 22vh;
`;
