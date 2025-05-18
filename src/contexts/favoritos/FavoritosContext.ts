import type { ApiData } from "@/types/ApiData";
import { createContext, type SetStateAction } from "react";

interface Props {
    favoritos: ApiData[];
    setFavoritos: React.Dispatch<SetStateAction<ApiData[]>>
}

const state = {
    favoritos: [],
    setFavoritos: () => []
}

export const FavoritosContext = createContext<Props>(state);