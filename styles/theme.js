import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    typography: {
        fontFamily: [
            'Segoe UI',
            'Helvetica Neue',
            'sans-serif'
        ].join(',')
    },
    palette: {
        primary: {
            main: '#000000',
            subtleMain: '#3F3F3F',
            darkerMain: '#1C2331',
            contrastText: '#FFFFFF',
            buttonColor: '#EEEEEE',
            white: '#FFFFFF',
            blue: '#2043db',
            pink: '#ee59e9',
            purple: '#7b1ee3'
        },

        secondary: {
            main: '#d1a961',
            darkerMain: '#B5955C'
        },

        info: {
            main: '#caf0f8',
            outline: '#D7D0D8',
        },

        detail: {
            main: '#158585'
        },

        cardInformation: {
            main: '#204C5A'
        }
    }
});

theme = responsiveFontSizes(theme);


export default theme;