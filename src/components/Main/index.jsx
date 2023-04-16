import React from "react";

import Ask from "../Ask";
import Header from "../Header";
import { usePrompts } from "../hooks";

const Main = () => {
    const { onPromptChange, onPromptSubmit, prompt } = usePrompts();
    return (
        <div>
            <Header title="Verifyx" />
            <Ask
                prompt={prompt}
                onPromptChange={onPromptChange}
                onPromptSubmit={onPromptSubmit}
            />
        </div>
    );
};

export default Main;
