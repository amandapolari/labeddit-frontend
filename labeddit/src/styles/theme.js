import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    components: {
        Button: {
            variants: {
                header: {
                    _hover: {
                        // bg: 'yellow.500',
                        // transition: 'bg 0.3s ease-in-out',
                    },
                },
                form: {
                    bg: 'yellow.500',
                    width: '100%',
                    _hover: {
                        bg: 'laranja.500',
                        transition: 'bg 0.3s ease-in-out',
                    },
                },
                logo: {
                    bg: 'none',
                    _hover: {
                        bg: 'none',
                    },
                },
            },
        },
    },
    colors: {
        gray: {
            500: '#EDEDED',
        },
        blue: {
            500: '#4088CB',
        },
    },
});