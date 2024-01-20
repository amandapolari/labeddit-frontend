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
            three: '#D5D8DE', // bordas dos inputs de signup
            four: '#EDEDED', // background header signup | background da textare de criar post e commentário
            five: '#FBFBFB', // background de cada card de post e comentário
        },
        white: {
            one: '#FFFFFF', // background all pages | e cor de dentro do botão com background orange
        },
        orange: '#FE7E02', // color btn criar conta
        blue: '#4088CB', // color btn login in page signup e cores em azul de contrato de usuario em signup
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
            one: '#EDEDED', // Substitua por uma cor adequada para o modo escuro
            two: '#A8BBC6', // Substitua por uma cor adequada para o modo escuro
            three: '#6F6F6F',
            four: '#323941',
            five: '#373737',
        },
        white: {
            one: '#FFFFFF', // Substitua por uma cor adequada para o modo escuro
        },
        orange: '#FE7E02',
        blue: '#4088CB',
    },
    backgrounds: {
        bg_btn_gradiente_orange:
            'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)',
        bg_page_white: '#171717', // Substitua por uma cor adequada para o modo escuro
        bg_page_gray: '#CADAE3', // bg do login
        bg_page_gray_one: '#808A9A', // bg do login
    },
});

const defaultTheme = createTheme({
    palette: {
        black: {
            one: '#000000', // subtitulo login | e cores em preto de contrato de usuario em signup
            two: '#323941', // Substitua por uma cor adequada para o modo escuro
        },
        gray: {
            one: '#EDEDED', // Substitua por uma cor adequada para o modo escuro
            two: '#A8BBC6', // Substitua por uma cor adequada para o modo escuro
            three: '#6F6F6F',
            four: '#323941',
            five: '#373737',
        },
        white: {
            one: '#FFFFFF', // Substitua por uma cor adequada para o modo escuro
        },
        orange: '#FE7E02',
        blue: '#4088CB',
    },
    backgrounds: {
        bg_btn_login: 'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)',
        bg_page_white: '#E5E5E5', // bg do login
        // bg_page_gray: '#EDEDED', // bg do login
    },
});

export { lightTheme, darkTheme, defaultTheme };

/*
Tons de cinza para utilizar do mais escuro pro mais claro:
#39404D
#434B58
#4D5565
#576071
#616A7C
#6B7486
#757E8F
#808A9A
#8A94A4
*/
