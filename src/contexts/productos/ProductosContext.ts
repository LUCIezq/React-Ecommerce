import type { ApiData } from "@/types/ApiData";
import { createContext } from "react";

export interface ProductosContextProps {
    data: ApiData[];
    loading: boolean;
    error: string | null;
    setData: React.Dispatch<React.SetStateAction<ApiData[]>>;

}

export const ProductosContext = createContext<ProductosContextProps>({
    data: [],
    setData: () => { },
    loading: true,
    error: null,
});