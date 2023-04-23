import React, { createContext, useState } from "react";
import { API_URL, COMPLETIONS, TOKEN } from "../constants";
import axios from "axios";

export const PromptContext = createContext();

const zip = (...rows) => [...rows[0]].map((_, c) => rows.map((row) => row[c]));

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

    const getResponse = (newPrompt) => {
        const currPrompts = [...prompts, { role: "user", content: newPrompt }];
        const currResponses = [...responses];
        let messages = [];
        zip(currPrompts, currResponses).forEach((message) => {
            messages.push(...message);
        });
        messages = messages.filter((message) => message != undefined);
        axios
            .post(`${API_URL}${COMPLETIONS}${TOKEN}`, messages, {
                headers: { Authorization: "baller" },
            })
            .then((res) => {
                updateErrorState(null);
                updatePrompts(currPrompts);
                updateLoadingState(false);
                const currOutput = res.data.choices[0].message;
                updateResponse(currOutput.content.toString());
                updateResponses([...responses, currOutput]);
            })
            .catch((err) => {
                updateErrorState(err);
                updateLoadingState(false);
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
