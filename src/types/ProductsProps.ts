import type { ApiData } from "./ApiData";

export interface ProductsProps {
    size?: number
    cart: ApiData[],
    setCart: React.Dispatch<React.SetStateAction<ApiData[]>>;
    filter?:string
}