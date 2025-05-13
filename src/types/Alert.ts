import type { ApiData } from "./ApiData";
export interface Alert {
    item: ApiData;
    setCart: React.Dispatch<React.SetStateAction<ApiData[]>>;
}
