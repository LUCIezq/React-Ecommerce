import { useState, useEffect } from "react"
import Product from "./Product";
import { SkeletonCard } from "./SkeletonCard";
import type { ApiData } from "@/types/ApiData";
import type { ProductsProps } from "@/types/ProductsProps";

export default function Products({ size, filter }: ProductsProps) {

    const [data, setData] = useState<ApiData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(true);

    const URL = "https://fakestoreapi.com/products";


    const fetchData = async () => {
        setError(false);
        setLoading(true);
        try {
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error("Error al obtener los datos.");
            }
            const dataJson = await response.json();
            setData(dataJson);

        } catch (err) {
            console.log("Hubo un error al cargar los datos: ", err);
            setError(true);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (error) {
        return (<div className="flex items-center  h-full justify-center  w-full">
            <p className="text-[#ffffff79] text-[20px]">Hubo un error al cargar los datos</p>
        </div>)
    }

    return (

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] 
        gap-4 w-full justify-start h-fit p-5 bg-[#0e0e11] rounded-[7px]" >
            {loading ? (
                <SkeletonCard grid={size ?? 4} />
            ) : (
                data != null &&
                data.filter((element) => filter === 'All' || element.category === filter || !filter).slice(0, size ?? data.length).map((product) => (
                    <Product key={product.id} item={product} />
                ))
            )}
        </div>
    )

}