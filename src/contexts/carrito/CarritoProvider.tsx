import { useEffect, useState, type JSX } from "react"
import { CarritoContext } from "./CarritoContext"
import type { ApiData } from "@/types/ApiData";
import { toast } from "sonner";

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const CarritoProvider = ({ children }: Props) => {


    const [carrito, setCarrito] = useState<ApiData[]>(() => {
        try {
            const storedCart = localStorage.getItem('carrito');
            return storedCart ? JSON.parse(storedCart) : [];
        } catch (error) {
            console.error('error al cargar el carrito', error)
            return [];
        }
    });

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

    useEffect(() => {
        try {
            localStorage.setItem('carrito', JSON.stringify(carrito))
        } catch (err) {
            console.error('error al setear el carrito', err)
        }
    }, [carrito]);

    return (
        <CarritoContext.Provider value={{ carrito, setCarrito, calcularTotal, addToCart, calcularTotalCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
}