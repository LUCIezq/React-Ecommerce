import type { User } from "@/types/User";
import { createContext, type SetStateAction } from "react";

type typeUser = User | null;

interface Props {
    usuario: typeUser;
    setUsuario: React.Dispatch<SetStateAction<typeUser>>
}

const init = {
    usuario: null,
    setUsuario: () => { }
}

export const UserContext = createContext<Props>(init);