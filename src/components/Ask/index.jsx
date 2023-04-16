import React from "react";
import Prompt from "../Prompt";

const Ask = ({ onPromptChange, onPromptSubmit, prompt }) => {
    return (
        <>
            <Prompt
                prompt={prompt}
                onPromptChange={onPromptChange}
                onPromptSubmit={onPromptSubmit}
            />
        </>
    );
};

export default Ask;
