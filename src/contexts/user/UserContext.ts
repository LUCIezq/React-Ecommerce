import { createContext, type SetStateAction } from "react";

type typeUser = Usuario | null;

interface Usuario {
    email: string;
    nombre: string;
    password: string;
    apellido: string;
}

interface Props {
    usuario: typeUser;
    setUsuario: React.Dispatch<SetStateAction<typeUser>>
}

const init = {
    usuario: null,
    setUsuario: () => { }
}

export const UserContext = createContext<Props>(init);