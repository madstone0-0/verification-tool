import React from "react";
import { createRoot } from "react-dom/client";
import GA4React from "ga-4-react";

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

try {
    setTimeout((_) => {
        const ga4react = new GA4React("G-17KR14R6PB");
        ga4react.initialize().catch((err) => console.error(err));
    }, 4000);
} catch (err) {
    console.error(err);
}
