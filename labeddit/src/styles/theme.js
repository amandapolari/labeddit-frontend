import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        black: {
            1: '#000000', // subtitulo login | e cores em preto de contrato de usuario em signup
            2: '#323941', // label dos inputs de login e signup
        },
        gray: {
            1: '#373737', // titulo login e signup
            2: '#6F6F6F', // color de criador do post e comentário
            3: '#D5D8DE', // bordas dos inputs de signup
            4: '#EDEDED', // background header signup | background da textare de criar post e commentário
            5: '#FBFBFB', // background de cada card de post e comentário
            6: '#E5E5E5', // bg do login
        },
        white: {
            1: '#FFFFFF', // background all pages | e cor de dentro do botão com background orange
        },
        orange: { 1: '#FE7E02' }, // color btn criar conta
        blue: { 1: '#4088CB' }, // color btn login in page signup e cores em azul de contrato de usuario em signup
    },
    backgrounds: {
        1: 'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)',
    },
});

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
