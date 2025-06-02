import { useState, type ReactNode } from "react"
import { StepsContext } from "./StepsContext";

interface Props {
    children: ReactNode
}

export const StepsProvider = ({ children }: Props) => {

    const [steps, setSteps] = useState<string[]>(["Carrito", "Envio", "Pago"]);

    return <StepsContext.Provider value={{ steps, setSteps }}>
        {children}
    </StepsContext.Provider>

}