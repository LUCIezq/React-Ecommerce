import { type ReactNode } from "react"
import { UsuariosContext } from "./UsuariosContext";
import type { User } from "@/types/User";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface UsuariosProviderProps {
    children: ReactNode
}

export const UsuariosProvider = ({ children }: UsuariosProviderProps) => {
    const admin = {
        nombre: "admin",
        apellido: "",
        email: "admin@admin.com",
        password: "adminadmin",
        cart: [],
        rol: "ADMIN"
    }
    const { object: usuarios, setObject: setUsuarios } = useLocalStorage<User[]>("usuarios", [admin]);

    return (
        <UsuariosContext.Provider value={{ usuarios: usuarios ?? [], setUsuarios }}>
            {children}
        </UsuariosContext.Provider>
    )
}