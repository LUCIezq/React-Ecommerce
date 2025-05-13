import type { ApiData } from "./ApiData"

export interface ProductProps {
    item: ApiData
    onClick: (item: ApiData) => void
}