import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#121212',
        },
        secondary: {
            main: '#944deb',
        },
    },
    typography: {
        fontFamily: "MontserratDM Sans"
    }
});

theme = responsiveFontSizes(theme);

export default theme;  