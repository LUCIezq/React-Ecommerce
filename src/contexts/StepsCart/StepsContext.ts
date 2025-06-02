import { createContext, type SetStateAction } from "react";

interface Props {
    steps: string[];
    setSteps: React.Dispatch<SetStateAction<string[]>>
}

const init = {
    steps: [],
    setSteps: () => {
        throw new Error('setSteps debe ser implementado en el Provider');
    },
}


export const StepsContext = createContext<Props>(init);