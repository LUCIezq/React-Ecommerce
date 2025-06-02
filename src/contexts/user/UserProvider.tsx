import { type JSX } from "react";
import { UserContext } from "./UserContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { User } from "@/types/User";

interface UserProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const UserProvider = ({ children }: UserProviderProps) => {

    const { object: usuario, setObject: setUsuario } = useLocalStorage<User | null>('usuario', null);

    return (
        <UserContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UserContext.Provider>
    )
}