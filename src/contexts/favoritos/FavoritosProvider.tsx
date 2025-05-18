import { useState, type JSX } from "react"
import { FavoritosContext } from "./FavoritosContext"
import type { ApiData } from "@/types/ApiData";

interface FavoritosProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const FavoritosProvider = ({ children }: FavoritosProviderProps) => {

    const [favoritos, setFavoritos] = useState<ApiData[]>([]);

    return (
        <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
            {children}
        </FavoritosContext.Provider>
    )
}