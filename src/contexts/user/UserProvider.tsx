import { type JSX } from "react";
import { UserContext } from "./UserContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface UserProviderProps {
    children: JSX.Element | JSX.Element[];
}

interface Usuario {
    email: string;
    nombre: string;
    password: string;
    apellido: string
}

export const UserProvider = ({ children }: UserProviderProps) => {

    const { object: usuario, setObject: setUsuario } = useLocalStorage<Usuario>('usuario');

    return (
        <UserContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UserContext.Provider>
    )
}