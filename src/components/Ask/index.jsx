import React from "react";
import Response from "../Response";
import Prompt from "../Prompt";
import { usePrompts } from "../hooks";
import { Box } from "@mui/material";

const Ask = ({ onPromptChange, onPromptSubmit }) => {
    const { output, loading, error, prompt } = usePrompts();
    return (
        <Box textAlign="center">
            <Prompt
                loading={loading}
                prompt={prompt}
                onPromptChange={onPromptChange}
                onPromptSubmit={onPromptSubmit}
            />
            {error ? (
                <div>Error communicating with server please try again</div>
            ) : output ? (
                <Response output={output} />
            ) : (
                <></>
            )}
        </Box>
    );
};

export default Ask;
