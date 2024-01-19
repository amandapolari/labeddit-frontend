import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    mode: 'light',
    palette: {
        black: {
            one: '#000000', // subtitulo login | e cores em preto de contrato de usuario em signup
            two: '#323941', // label dos inputs de login e signup
        },
        gray: {
            one: '#373737', // titulo login e signup
            two: '#6F6F6F', // color de criador do post e comentário
            3: '#D5D8DE', // bordas dos inputs de signup
            4: '#EDEDED', // background header signup | background da textare de criar post e commentário
            5: '#FBFBFB', // background de cada card de post e comentário
        },
        white: {
            1: '#FFFFFF', // background all pages | e cor de dentro do botão com background orange
        },
        orange: '#FE7E02', // color btn criar conta
        blue: '#4088CB', // color btn login in page signup e cores em azul de contrato de usuario em signup
    },
    backgrounds: {
        bg_btn_gradiente_orange:
            'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)',
        bg_page_white: '#E5E5E5',
    },
});

const darkTheme = createTheme({
    mode: 'dark',
    palette: {
        black: {
            one: '#000000', // subtitulo login | e cores em preto de contrato de usuario em signup
            two: '#323941', // Substitua por uma cor adequada para o modo escuro
        },
        gray: {
            1: '#EDEDED', // Substitua por uma cor adequada para o modo escuro
            2: '#A8BBC6', // Substitua por uma cor adequada para o modo escuro
            3: '#6F6F6F',
            4: '#323941',
            5: '#373737',
        },
        white: {
            1: '#373737', // Substitua por uma cor adequada para o modo escuro
        },
        orange: '#FE7E02',
        blue: '#4088CB',
    },
    backgrounds: {
        bg_btn_gradiente_orange:
            'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)',
        bg_page_white: '#171717', // Substitua por uma cor adequada para o modo escuro
    },
});

export { lightTheme, darkTheme };
