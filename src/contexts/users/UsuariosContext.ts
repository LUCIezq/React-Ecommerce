import { createContext, type SetStateAction } from "react";

interface Usuario {
    email: string;
    nombre: string;
    password: string;
    apellido: string;
}

interface Props {
    usuarios: Usuario[];
    setUsuarios: React.Dispatch<SetStateAction<Usuario[]>>;
}

const init: Props = {
    usuarios: [],
    setUsuarios: () => { }
}

export const UsuariosContext = createContext<Props>(init);