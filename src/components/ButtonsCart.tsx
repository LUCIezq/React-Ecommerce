import { CarritoContext } from "@/contexts/carrito/CarritoContext";
import type { ApiData } from "@/types/ApiData";
import { Minus, Plus } from "lucide-react"
import { useContext, type ReactNode } from "react";
import { Button } from "./Button";

interface Props {
    content: ReactNode;
    product: ApiData
}

export const ButtonCart = ({ content, product }: Props) => {
    const { decrementarCantidad, incrementarCantidad } = useContext(CarritoContext);

    return (
        <div className="flex items-center gap-5 border-1 p-1.5
        border-[#ffffff54] rounded-[7px] w-full max-w-36 justify-between ">
            <Button classname="cursor-pointer" onClick={() => decrementarCantidad(product)} children={<Minus strokeWidth={1} />} />
            <Button children={content} />
            <Button children={<Plus strokeWidth={1} />} classname="cursor-pointer" onClick={() => incrementarCantidad(product)} />
        </div>
    )
}