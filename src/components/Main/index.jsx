import React from "react";

import Ask from "../Ask";
import Header from "../Header";
import { usePrompts } from "../hooks";
import { Container } from "@mui/material";

const Main = () => {
    const { onPromptChange, onPromptSubmit, prompt, output, loading } =
        usePrompts();
    return (
        <div>
            <Header title="HealthVerifyx" />
            <Container maxWidth="xl">
                <Ask
                    loading={loading}
                    output={output}
                    prompt={prompt}
                    onPromptChange={onPromptChange}
                    onPromptSubmit={onPromptSubmit}
                />
            </Container>
        </div>
    );
};

export default Main;
