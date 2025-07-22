import { useFetch } from "@/hooks/use-fetch";
import type { ApiData } from "@/types/ApiData";
import { ProductosContext } from "./ProductosContext";

export const ProductosProvider = ({ children }: { children: React.ReactNode }) => {
    const { data, setData, loading, error } = useFetch<ApiData[]>("https://fakestoreapi.com/products");

    return (
        <ProductosContext.Provider
            value={{
                data: data ?? [],
                setData: (setData as React.Dispatch<React.SetStateAction<ApiData[]>>),
                loading,
                error: error?.message ?? null,
            }}
        >
            {children}
        </ProductosContext.Provider>
    );
};