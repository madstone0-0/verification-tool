import React from "react";
import { createRoot } from "react-dom/client";

import AppThemeProvider from "./components/AppThemeProvider";
import Main from "./components/Main";
import PromptProvider from "./components/PromptProvider";
import css from "./styles/styles.css?inline";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <PromptProvider>
            <AppThemeProvider>
                <Main />
            </AppThemeProvider>
        </PromptProvider>
    </React.StrictMode>,
);
