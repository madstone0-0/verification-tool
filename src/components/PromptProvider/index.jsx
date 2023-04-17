import { Configuration, OpenAIApi } from "openai";
import React, { createContext, useState } from "react";
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
        // console.log({ prompt });
        getResponse(prompt);
        updateLoadingState(true);
        updatePrompt("");
    };

    const getResponse = async (prompt) => {
        updatePrompts([...prompts, { role: "user", content: prompt }]);
        console.log({ prompts });
        openai
            .createChatCompletion({
                model: MODEL,
                messages: [
                    // { role: "system", content: `${PERSONA}` },
                    ...prompts,
                    ...responses,
                ],
                temperature: TEMP,
                max_tokens: 2048,
            })
            .then((res) => {
                console.log(res.data.choices[0].message);
                updateLoadingState(false);
                updateResponse(res.data.choices[0].message);
                updateResponses([
                    ...responses,
                    { role: "assistant", content: output },
                ]);
                console.log({ responses });
                console.log({ output });
            })
            .catch((err) => {
                updateErrorState(err);
            });
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
