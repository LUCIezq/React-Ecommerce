import { X } from "lucide-react";
import { ButtonCart } from "./ButtonsCart";
import type { ApiData } from "@/types/ApiData";

interface Props {
    product: ApiData;
    deleteElement: (product: ApiData) => void;
}

export const CarritoCard = ({ product, deleteElement }: Props) => {
    return (
        <>
            <div className="text-white bg-black border-1 p-4 rounded-2xl border-[#ffffff31] flex flex-col gap-4" key={product.id}>
                <div className="flex justify-between ">
                    <div>
                        <h2 className="text-[15px] font-medium hover:underline">
                            {product.title}
                        </h2>
                        <span className="text-gray-500">{product.category}</span>
                    </div>
                    <X className="cursor-pointer" onClick={() => deleteElement(product)} strokeWidth={1} />
                </div>

                <div className="flex justify-between text-[15px] font-medium">
                    <span>$ {product.price}</span>
                    <ButtonCart content={product.quantity} product={product} />
                </div>
            </div>
        </>
    )
}