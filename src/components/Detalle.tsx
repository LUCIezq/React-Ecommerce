import type { ApiData } from "@/types/ApiData"
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface Props {
    carrito: ApiData[];
    calcularTotal: () => ReactNode
    calcularTotalCarrito: () => ReactNode
    currentStep: number
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}
export const Detalle = ({ carrito, calcularTotal, calcularTotalCarrito, currentStep, setCurrentStep }: Props) => {

    return (
        <div className="bg-black flex flex-col gap-3 p-4 ">
            <span className="text-2xl font-medium text-end">{calcularTotal()} productos</span>
            <div className="flex flex-col gap-3 p-2 h-full max-h-[300px] overflow-y-scroll">
                {carrito.map((Product) => {
                    return <div className="flex border-t-1 border-b-1 border-neutral-900 items-center justify-between p-1 py-2" key={Product.id}>
                        <h3 className="w-full text-[15px] max-w-[450px]">{Product.quantity} x {Product.title}</h3>
                        <span className="flex">$ {Product.price}</span>
                    </div>
                })}
            </div>
            <div>
                <h4 className="flex justify-between font-medium border-t-1 pt-5 border-neutral-800">
                    Envio
                    <span>Gratis</span>
                </h4>
                <h5 className="flex justify-between font-medium ">
                    Total
                    <span>${calcularTotalCarrito()} </span>
                </h5>
            </div>


            <div className="w-full flex justify-center flex-col items-center gap-2 mt-8">
                <button onClick={() => {
                    toast.info('Orden creada con exito')
                    setCurrentStep(currentStep + 1);
                }} className="bg-black flex items-center p-2 border-1 gap-2.5 text-[17px] font-medium max-w-[300px] w-full cursor-pointer transition-all justify-center hover:bg-neutral-950">
                    Confirmar orden
                    <ArrowRight />
                </button>
                <Link to='/productos' className="text-neutral-400 text-[14px] hover:text-white">
                    Continuar comprando
                </Link>
            </div>

        </div>
    )
}