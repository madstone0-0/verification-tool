import { Alert, Box } from "@mui/material";
import React from "react";
import Prompt from "../Prompt";
import Response from "../Response";
import { usePrompts } from "../hooks";

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
                <Alert
                    sx={{
                        alignSelf: "center",
                        display: "inline-flex",
                        mx: "2px",
                        mt: 2,
                    }}
                    severity="error"
                >
                    Error communicating with server please try again
                </Alert>
            ) : output ? (
                <Response output={output} />
            ) : (
                <></>
            )}
        </Box>
    );
};

export default Ask;
