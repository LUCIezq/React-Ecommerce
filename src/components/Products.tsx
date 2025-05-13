import { useState, useEffect } from "react"
import Product from "./Product";
import { SkeletonCard } from "./SkeletonCard";
import { toast } from 'sonner'
import type { ApiData } from "@/types/ApiData";
import type { ProductsProps } from "@/types/ProductsProps";


export default function Products({ size, cart, setCart }: ProductsProps) {

    const [data, setData] = useState<ApiData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const addToCart = (item: ApiData): void => {

        setCart(prevCart => {
            const exist = cart.find(element => element.id === item.id);

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
        localStorage.setItem("cart", JSON.stringify(cart))
    }


    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://fakestoreapi.com/products");

            if (!response.ok) {
                throw new Error("Error al obtener los datos.");
            }
            const dataJson = await response.json();
            setData(dataJson);

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="grid grid-cols-[repeat(auto-fit,min(350px,100%))] gap-4 w-full justify-center h-fit" >
            {loading ? (
                <SkeletonCard grid={size ?? 5} />
            ) : (
                data != null &&
                data.slice(0, size ?? data.length).map((product) => {
                    return <Product key={product.id} item={product} onClick={addToCart} />
                    //diferencia entre addToCart y ()=>addToCart
                })
            )}
        </div>
    )

}