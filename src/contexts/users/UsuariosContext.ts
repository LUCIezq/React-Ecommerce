import type { User } from "@/types/User";
import { createContext, type SetStateAction } from "react";

interface Props {
    usuarios: User[];
    setUsuarios: React.Dispatch<SetStateAction<User[]>>;
}

const init: Props = {
    usuarios: [],
    setUsuarios: () => [{}]
}

export const UsuariosContext = createContext<Props>(init);