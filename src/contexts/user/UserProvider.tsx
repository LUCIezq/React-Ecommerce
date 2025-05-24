import { useEffect, useState, type JSX } from "react";
import { UserContext } from "./UserContext";

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

    const [usuario, setUsuario] = useState<Usuario | null>(() => {

        try {
            const usuarioStored = localStorage.getItem('usuario');
            return usuarioStored ? JSON.parse(usuarioStored) : null;
        } catch (error) {
            console.error('error al cargar el usuario', error)
            return null;
        }

    });

    useEffect(() => {
        try {
            localStorage.setItem('usuario', JSON.stringify(usuario))
        } catch (err) {
            console.error('error al setear el usuario', err)
        }
    }, [usuario]);

    return (
        <UserContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UserContext.Provider>
    )
}