import Filter from "@/components/Filter"
import Main from "@/components/Main"
import Products from "@/components/Products"
import PushProduct from "@/components/PushProduct";
import Title from "@/components/Title"
import { useState } from "react";


export default function Producto() {
    const [filter, setFilter] = useState<string>("All");

    return (
        <>
            <Main>
                <div className='flex flex-col min-w-[350px] gap-7 h-fit w-full'>
                    <Title text="Nuestros productos" />
                    <Filter setFilter={setFilter} />

                    <PushProduct />

                </div>
                <Products filter={filter} />
            </Main>
        </>
    )
}