import Filter from "@/components/Filter"
import Main from "@/components/Main"
import Products from "@/components/Products"
import Title from "@/components/Title"
import type { ApiData } from "@/types/ApiData"
import { useState } from "react"

interface ProductoProps {
    cart: ApiData[],
    setCart: React.Dispatch<React.SetStateAction<ApiData[]>>;
}

export default function Producto({ cart, setCart }: ProductoProps) {
    const [filter, setFilter] = useState<string>("All");

    return (
        <>
            <Main>
                <div className='flex flex-col w-fit p-7 min-w-[350px] gap-7  h-fit'>
                    <Title text="Nuestros productos" />
                    <Filter setFilter={setFilter} />
                </div>
                <Products filter={filter} cart={cart} setCart={setCart} />
            </Main>
        </>
    )
}