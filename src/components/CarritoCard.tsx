import { ButtonCart } from "./ButtonsCart";
import type { ApiData } from "@/types/ApiData";
import AlertDialogComponent from "./AlertDialogComponent";

interface Props {
    product: ApiData;
    deleteElement: (product: ApiData) => void;
}

export const CarritoCard = ({ product }: Props) => {
    return (
        <>
            <div className="text-white bg-black border-1 p-4 rounded-2xl border-[#ffffff31] flex flex-col gap-4" key={product.id}>
                <div className="flex justify-between items-start ">
                    <div>
                        <h2 className="text-[15px] font-medium hover:underline">
                            {product.title}
                        </h2>
                        <span className="text-gray-500">{product.category}</span>
                    </div>
                    <AlertDialogComponent handleFunction={() => (console.log)} item={product} />
                </div>

                <div className="flex justify-between text-[15px] font-medium">
                    <span>$ {product.price}</span>
                    <ButtonCart content={product.quantity} product={product} />
                </div>
            </div>
        </>
    )
}