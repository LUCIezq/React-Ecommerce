import { UsuariosContext } from "@/contexts/users/UsuariosContext";
import type { User } from "@/types/User";
import { useContext } from "react";


export const ObtenerUsuariosRegistrados = (): User[] => {
    const { usuarios } = useContext(UsuariosContext);
    return usuarios;
}