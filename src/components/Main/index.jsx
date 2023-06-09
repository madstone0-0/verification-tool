import React, { useEffect } from "react";
import GA4React from "ga-4-react";

import Ask from "../Ask";
import Header from "../Header";
import { usePrompts } from "../hooks";
import { Container } from "@mui/material";

const Main = () => {
    const { onPromptChange, onPromptSubmit } = usePrompts();
    return (
        <div>
            <Header title="HealthVerifyx" />
            <Container maxWidth="xl">
                <Ask
                    onPromptChange={onPromptChange}
                    onPromptSubmit={onPromptSubmit}
                />
            </Container>
        </div>
    );
};

export default Main;
