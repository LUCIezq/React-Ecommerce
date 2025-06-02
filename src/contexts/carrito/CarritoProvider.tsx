import { CarritoContext } from "./CarritoContext"
import type { ApiData } from "@/types/ApiData";
import { toast } from "sonner";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const CarritoProvider = ({ children }: Props) => {

    const { object: carrito, setObject: setCarrito } = useLocalStorage<ApiData[]>('carrito', []);


    const calcularTotal = (): number => {
        return carrito.reduce((sum, item) => { return sum + item.quantity }, 0);
    }

    const addToCart = (item: ApiData): void => {


        setCarrito(prevCart => {
            const exist = carrito.find(element => element.id === item.id);

            if (exist) {
                return prevCart.map(element => element.id === item.id ?
                    { ...element, quantity: element.quantity + 1 } : element)
            } else {
                return [...prevCart, { ...item, quantity: 1 }]
            }
        })

        toast.success(`Producto agregado con exito!`, {
            description: `${item.title}`
        });

        localStorage.setItem("carrito", JSON.stringify(carrito))
    }

    const calcularTotalCarrito = (): string => {
        return carrito.reduce((sum, item) => { return sum + item.quantity * item.price }, 0).toFixed(2);
    }

    return (
        <CarritoContext.Provider value={{ carrito, setCarrito, calcularTotal, addToCart, calcularTotalCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
}