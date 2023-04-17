import { useContext } from "react";

import { PromptContext } from "../PromptProvider";

export const usePrompts = () => useContext(PromptContext);
