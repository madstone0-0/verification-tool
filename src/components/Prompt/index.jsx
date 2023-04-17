import { Stack, TextField } from "@mui/material";
import React from "react";
import { LoadingButton } from "@mui/lab";

const Prompt = ({ onPromptChange, onPromptSubmit, prompt, loading }) => {
    return (
        <form onSubmit={onPromptSubmit}>
            <Stack
                sx={{ mt: { md: 15, xs: 10 } }}
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <TextField
                    id="prompt-input"
                    label="Enter health information here"
                    variant="outlined"
                    multiline
                    minRows={5}
                    maxRows={10}
                    // placeholder="Enter health information here"
                    sx={{
                        width: { md: "50%", xs: "80%" },
                        borderRadius: 28,
                        color: "primary.main",
                        "& label.Mui-focused": {
                            color: "primary.dark",
                        },
                        "& .MuiInput-underline:after": {
                            borderBottomColor: "primary.dark",
                        },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "primary.dark",
                            },
                            "&:hover fieldset": {
                                borderColor: "primary.main",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "primary.dark",
                            },
                        },
                    }}
                    onChange={onPromptChange}
                    value={prompt}
                    type="text"
                />
                <LoadingButton
                    loading={loading}
                    sx={{ backgroundColor: "primary.dark" }}
                    variant="contained"
                    type="submit"
                >
                    <span>Verify</span>
                </LoadingButton>
            </Stack>
        </form>
    );
};

export default Prompt;
