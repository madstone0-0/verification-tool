import React from "react";
import Response from "../Response";
import Prompt from "../Prompt";

const Ask = ({ onPromptChange, onPromptSubmit, prompt, output, loading }) => {
    return (
        <>
            <Prompt
                loading={loading}
                prompt={prompt}
                onPromptChange={onPromptChange}
                onPromptSubmit={onPromptSubmit}
            />
            {output ? <Response output={output} /> : <></>}
        </>
    );
};

export default Ask;
