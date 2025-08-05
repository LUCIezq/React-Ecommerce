import Filter from "@/components/Filter"
import Main from "@/components/Main"
import Products from "@/components/Products"
import PushProduct from "@/components/PushProduct";
import Title from "@/components/Title"
import { UserContext } from "@/contexts/user/UserContext";
import { useContext, useState } from "react";


export default function Producto() {
    const [filter, setFilter] = useState<string>("All");

    const { usuario } = useContext(UserContext);

    return (
        <>
            <Main>
                <div className='flex flex-col min-w-[350px] gap-7 h-fit w-full'>
                    <Title text="Nuestros productos" />
                    <Filter setFilter={setFilter} />

                    {
                        usuario?.rol === "ADMIN" && <PushProduct />
                    }

                </div>
                <Products filter={filter} />
            </Main>
        </>
    )
}