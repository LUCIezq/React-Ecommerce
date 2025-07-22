import { ProductosContext } from "@/contexts/productos/ProductosContext";
import Product from "./Product";
import { SkeletonCard } from "./SkeletonCard";
import type { ProductsProps } from "@/types/ProductsProps";
import { useContext } from "react";

export default function Products({ size, filter }: ProductsProps) {

    const { data, loading, error } = useContext(ProductosContext);

    if (error) {
        return (<div className="flex items-center  h-full justify-center  w-full">
            <p className="text-[#ffffff79] text-[20px]">Hubo un error al cargar los datos</p>
        </div>)
    }

    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] 
        gap-4 w-full justify-start h-fit p-5 rounded-[7px]" >
            {loading ? (
                <SkeletonCard grid={size ?? 5} />
            ) : (
                data != null &&
                data.filter((element) => filter === 'All' || element.category === filter || !filter).slice(0, size ?? data.length).map((product) => (
                    <Product key={product.id} item={product} />
                ))
            )}
        </div>
    )

}