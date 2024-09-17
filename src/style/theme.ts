import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
    breakpoints: {
        xs: '480px',
        sm: '768px',
        md: '1200px',
        lg: '1440px',
        xl: '1920px',
    },

    typography: {
        fontFamily: {
            montserrat: 'Montserrat',
            roboto: 'Roboto',
            condensed: 'Roboto Condensed',
        },

        fontSize: {
            h1: '68px',
            h2: '48px',
            h3: '46px',
            h4: '44px',
            h5: '42px',
            h6: '40px',
            p38: '38px',
            p36: '36px',
            p34: '34px',
            p32: '32px',
            p30: '30px',
            p28: '28px',
            p26: '26px',
            p24: '24px',
            p22: '22px',
            p20: '20px',
            p18: '18px',
            p16: '16px',
            p14: '14px',
            p12: '12px',
            p10: '10px',
            p8: '8px',
        },

        weight: {
            thin: 100,
            light: 300,
            regular: 400,
            medium: 500,
            bold: 600,
            black: 700,
        },
    },

    borderRadius: {
        radius6: '6px',
        radius30: '30px',
    },

    zIndex: {
        index8: '8',
    },

    palette: {
        white: '#ffffff',
        black: '#000000',
        gray100: '#D3D3D6',
        gray200: '#6B6E77',

        base: '#F5F6FA',
        primary: '#232873',
        secondary: '#F0F0F1',
        accent: '#14008E',

        borderColor: '#BDBFD5',
    },
};

export default defaultTheme;
