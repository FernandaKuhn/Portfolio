import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#2b2b2b',
        },
        secondary: {
            main: '#e8e8e8',
        },
    },
    typography: {
        fontFamily: "Didact Gothic"
    }
});

theme = responsiveFontSizes(theme);

export default theme;  