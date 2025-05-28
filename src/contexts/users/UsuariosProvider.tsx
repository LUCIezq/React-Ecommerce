import { useEffect, useState, type JSX } from "react"
import { UsuariosContext } from "./UsuariosContext";

interface UsuariosProviderProps {
    children: JSX.Element | JSX.Element[]
}

interface Usuario {
    email: string;
    nombre: string;
    password: string;
    apellido: string;
}

export const UsuariosProvider = ({ children }: UsuariosProviderProps) => {

    const [usuarios, setUsuarios] = useState<Usuario[]>(() => {
        try {
            const usuariosStored = localStorage.getItem('usuarios');
            return usuariosStored ? JSON.parse(usuariosStored) : [];
        } catch (error) {
            console.error('Error al cargar los usuarios', error);
            return null;
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem('usuarios', JSON.stringify(usuarios))
        } catch (err) {
            console.error('Error al setear los usuarios', err)
        }
    }, [usuarios]);

    return (
        <UsuariosContext.Provider value={{ usuarios, setUsuarios }}>
            {children}
        </UsuariosContext.Provider>
    )
}