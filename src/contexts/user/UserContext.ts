import { createContext, type SetStateAction } from "react";

interface Usuario{
    email:string;
    nombre:string;
    password:string;
    apellido:string;
}

interface Props{
    usuario: Usuario|null;
    setUsuario: React.Dispatch<SetStateAction<Usuario|null>>
}

const init = {
    usuario:null,
    setUsuario:()=>{}
}

export const UserContext = createContext<Props>(init);