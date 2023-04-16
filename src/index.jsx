import React from "react";
import { createRoot } from "react-dom/client";

import AppThemeProvider from "./components/AppThemeProvider";
import Main from "./components/Main";
import css from "./styles/styles.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
            <AppThemeProvider>
                <Main />
            </AppThemeProvider>
    </React.StrictMode>,
);
