import { CarritoCard } from "@/components/CarritoCard";
import CartEmpty from "@/components/CartEmpty";
import { Detalle } from "@/components/Detalle";
import Main from "@/components/Main";
import { StepProgress } from "@/components/StepProgress";
import { CarritoContext } from "@/contexts/carrito/CarritoContext";
import { StepsProvider } from "@/contexts/StepsCart/StepsProvider";
import { useContext, useState } from "react";

export default function Checkout() {
    const { carrito, vaciarCarrito, calcularTotalCarrito, calcularTotal, deleteElement } = useContext(CarritoContext);
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <StepsProvider>
            <Main>
                {
                    carrito.length > 0 ?
                        <div className="p-5 flex flex-col gap-5">
                            <div className="flex justify-center w-full">
                                <StepProgress currentStep={currentStep} />
                            </div>

                            <div className="flex gap-16 justify-center  pt-10 relative">
                                <div className="flex flex-col gap-3 max-w-[800px] w-full">
                                    <span onClick={vaciarCarrito} className="text-white self-end hover:text-white cursor-pointer w-fit transition-all flex text-end items-center gap-1.5 ">
                                        Vaciar carrito
                                    </span>
                                    <div className="flex flex-col gap-2 max-h-[750px] h-full overflow-y-scroll p-1">
                                        {
                                            carrito.map((product) => {
                                                return (
                                                    <CarritoCard key={product.id} product={product} deleteElement={deleteElement} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="text-white flex flex-col gap-7 w-full max-w-[600px] sticky top-0 ">

                                    <Detalle carrito={carrito}
                                        calcularTotal={calcularTotal}
                                        calcularTotalCarrito={calcularTotalCarrito}
                                        setCurrentStep={setCurrentStep}
                                        currentStep={currentStep}
                                    />
                                </div>
                            </div>

                        </div>
                        :
                        <CartEmpty text="El carrito se encuentra vacio" />
                }
            </Main>
        </StepsProvider>
    )
}