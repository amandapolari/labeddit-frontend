import styled from 'styled-components';

export const NoticeContainerComponent = styled.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    padding: 1rem;
    /* width: 80vw; */
    height: 10vh;
    top: 25vh;
    position: absolute;
    /* position: fixed; */
    /* border: red 2px solid; */

    /* Para telas maiores que 1200px */
    @media (min-width: 1200px) {
        width: 100vw;
        /* border: red 2px solid; */
        padding: 0;
        margin: 0;
        /* width: 90vw; */
    }
`;

// export const Text = styled.p``;
