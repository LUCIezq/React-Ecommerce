import type { ApiData } from "@/types/ApiData";
import { createContext, type SetStateAction } from "react";

interface Props {
    carrito:ApiData[];
    setCarrito:React.Dispatch<SetStateAction<ApiData[]>>
    calcularTotal:()=>number,
    addToCart:(item:ApiData)=>void
    calcularTotalCarrito:()=>string
}

const state = {
    carrito: [],
    setCarrito:()=>[],
    calcularTotal:()=>0,
    addToCart:()=>[],
    calcularTotalCarrito:()=>''

}

export const CarritoContext = createContext<Props>(state);
