import type { ApiData } from "./ApiData";
export interface Alert {
    item: ApiData;
    handleFunction: (item: ApiData) => void;
}
