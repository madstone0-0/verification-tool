import React, { createContext, useState } from "react";

export const PromptContext = createContext();

const PromptProvider = ({ children }) => {
    const [prompt, updatePrompt] = useState("");
    const [error, updateErrorState] = useState(null);
    const [loading, updateLoadingState] = useState(true);

    const onPromptChange = (e) => {
        return updatePrompt(e.target.value);
    };

    const onPromptSubmit = (e) => {
        e.preventDefault();
        console.log({ prompt });
        updateLoadingState(true);
        updatePrompt("");
    };

    return (
        <PromptContext.Provider
            value={{ onPromptChange, onPromptSubmit, prompt }}
        >
            {children}
        </PromptContext.Provider>
    );
};

export default PromptProvider;
