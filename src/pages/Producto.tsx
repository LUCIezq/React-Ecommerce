import Filter from "@/components/Filter"
import Main from "@/components/Main"
import Products from "@/components/Products"
import Title from "@/components/Title"
import { useState } from "react"


export default function Producto() {
    const [filter, setFilter] = useState<string>("All");

    return (
        <>
            <Main>
                <div className='flex flex-col w-fit min-w-[350px] gap-7 h-fit'>
                    <Title text="Nuestros productos" />
                    <Filter setFilter={setFilter} />
                </div>
                <Products filter={filter} />
            </Main>
        </>
    )
}