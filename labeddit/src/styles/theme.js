import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        black: {
            1: '#000000',
            2: '#323941',
        },
        gray: {
            1: '#373737',
            2: '#6F6F6F',
            3: '#D5D8DE',
            4: '#EDEDED',
            5: '#FBFBFB',
            6: '#E5E5E5',
            7: '#ECECEC',
        },
        white: {
            1: '#FFFFFF',
        },
        orange: { 1: '#FE7E02' },
        blue: { 1: '#4088CB' },
    },
    backgrounds: {
        1: 'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)',
    },
});
