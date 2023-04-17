import { Configuration, OpenAIApi } from "openai";
import React, { createContext, useState, useEffect } from "react";
import { MODEL, PERSONA, TEMP } from "../constants";

export const PromptContext = createContext();

const chatConfig = new Configuration({
    apiKey: "[redacted]",
});

const openai = new OpenAIApi(chatConfig);

const PromptProvider = ({ children }) => {
    const [prompt, updatePrompt] = useState("");
    const [output, updateResponse] = useState("");
    const [error, updateErrorState] = useState(null);
    const [loading, updateLoadingState] = useState(false);
    const [prompts, updatePrompts] = useState([]);
    const [responses, updateResponses] = useState([]);

    const onPromptChange = (e) => {
        return updatePrompt(e.target.value);
    };

    const onPromptSubmit = (e) => {
        e.preventDefault();
        if (!prompt) return;
        updateLoadingState(true);
        getResponse(prompt);
        updateResponse("");
        updatePrompt("");
    };

    const getResponse = async (newPrompt) => {
        const currPrompts = [...prompts, { role: "user", content: newPrompt }];
        const currResponses = [...responses];
        openai
            .createChatCompletion({
                model: MODEL,
                messages: [
                    { role: "system", content: `${PERSONA}` },
                    ...currPrompts,
                    ...currResponses,
                ],
                temperature: TEMP,
                max_tokens: 2048,
            })
            .then((res) => {
                updatePrompts(currPrompts);
                updateLoadingState(false);
                const currOutput = res.data.choices[0].message;
                console.log({ currOutput });
                updateResponse(currOutput.content.toString());
                updateResponses([...responses, currOutput]);
            })
            .catch((err) => {
                updateErrorState(err);
            });
    };

    return (
        <PromptContext.Provider
            value={{
                onPromptChange,
                onPromptSubmit,
                prompt,
                loading,
                error,
                output,
            }}
        >
            {children}
        </PromptContext.Provider>
    );
};

export default PromptProvider;
