import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
    palette: {
        // mode: "dark",
        primary: {
            main: "#B12121",
            dark: "#388E3C",
        },
        secondary: {
            main: "#AEFF8D",
        },
        credibility: {
            credible: "#388E3C",
            unsure: "#D0A817",
            notCredible: "#B12121",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

const AppThemeProvider = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
