import type { ApiData } from "@/types/ApiData";
import { createContext, type SetStateAction } from "react";

interface Props {
    carrito: ApiData[];
    setCarrito: React.Dispatch<SetStateAction<ApiData[]>>
    calcularTotal: () => number,
    addToCart: (item: ApiData) => void
    calcularTotalCarrito: () => string
    vaciarCarrito: () => void
    incrementarCantidad: (item: ApiData) => void
    decrementarCantidad: (item: ApiData) => void
    deleteElement: (item: ApiData) => void
}

const state = {
    carrito: [],
    setCarrito: () => {
        throw new Error('setCarrito debe ser implementado en el Provider');
    },
    calcularTotal: () => 0,
    addToCart: () => {
        throw new Error('addToCart debe ser implementado en el Provider');
    },
    calcularTotalCarrito: () => '0',
    vaciarCarrito: () => {
        throw new Error('vaciarCarrito debe ser implementado en el Provider');
    },
    incrementarCantidad: () => {
        throw new Error('incrementarCantidad debe ser implementado en el Provider');
    },
    decrementarCantidad: () => {
        throw new Error('decrementarCantidad debe ser implementado en el Provider');
    },
    deleteElement: () => {
        throw new Error('deleteElementplementado en el Provider');
    }
}

export const CarritoContext = createContext<Props>(state);
