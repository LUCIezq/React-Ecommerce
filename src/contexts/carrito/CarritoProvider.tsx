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
            const exist = prevCart.find(element => element.id === item.id);

            if (!exist) {
                toast.success(`Producto agregado con exito!`, {
                    description: `${item.title}`
                });
                return [...prevCart, { ...item, quantity: 1 }]
            }

            if (exist.quantity < 10) {
                toast.success(`Producto agregado con exito!`, {
                    description: `${item.title}`
                });
                return prevCart.map(element => element.id === item.id ?
                    { ...element, quantity: element.quantity + 1 } : element)
            } else {
                toast.warning(`El tope es de 10 unidades por producto`);
                return prevCart;
            }
        })
    }

    const calcularTotalCarrito = (): string => {
        return carrito.reduce((sum, item) => { return sum + item.quantity * item.price }, 0).toFixed(2);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const incrementarCantidad = (item: ApiData): void => {
        if (item.quantity < 10) {
            setCarrito((prevCart) => {
                return prevCart.map(element => element.id === item.id ?
                    { ...element, quantity: element.quantity + 1 } : element)
            })
        } else {
            toast.warning('El tope es de 10 unidades por producto')
        }
    }

    const decrementarCantidad = (item: ApiData): void => {
        setCarrito((prevCart) => {
            const newCart = prevCart.map(element => element.id === item.id ?
                { ...element, quantity: element.quantity - 1 } : element)

            return newCart.filter(element => element.quantity > 0);
        })
    }

    const deleteElement = (item: ApiData) => {
        setCarrito(prevCart => prevCart.filter(element => !(element.id == item.id)))
        toast.error('Producto eliminado')
    }

    return (
        <CarritoContext.Provider value={{ carrito, setCarrito, calcularTotal, addToCart, calcularTotalCarrito, vaciarCarrito, incrementarCantidad, decrementarCantidad, deleteElement }}>
            {children}
        </CarritoContext.Provider>
    )
}