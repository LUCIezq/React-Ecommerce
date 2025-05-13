import type { ApiData } from "./ApiData";

export interface NavBarProps {
    total: number;
    cart: ApiData[];
    setCart: React.Dispatch<React.SetStateAction<ApiData[]>>;
    hidden?:boolean
    setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}