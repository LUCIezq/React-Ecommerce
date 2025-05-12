import { useState, useEffect } from "react"
import Product from "./Product";
import { SkeletonCard } from "./SkeletonCard";


interface ApiData {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    imageUrl: string,
    quantity: number
}

interface propsComponent {
    size?: number
}

export default function Products({ size }: propsComponent) {

    const [data, setData] = useState<ApiData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [cart, setCart] = useState<ApiData[]>(() => {
        try {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        } catch (error) {
            console.error('error al cargar el carrito', error)
            return [];
        }
    });
    const [total, setTotal] = useState<number>(() => {
        try {
            const totalStored = localStorage.getItem('total');
            return totalStored ? JSON.parse(totalStored) : 0;
        } catch (error) {
            console.error('error al cargar el carrito', error)
            return [];
        }
    });

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

    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart))
        } catch (err) {
            console.error('error al setear el carrito', err)
        }

        setTotal(() => {
            return cart.reduce((sum, item) => {
                return sum + item.quantity
            }, 0)
        })

        try {
            localStorage.setItem('total', JSON.stringify(total))
        } catch (err) {
            console.error('error al setear el carrito', err)
        }

    }, [cart, total]);

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