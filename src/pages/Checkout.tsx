import { CarritoCard } from "@/components/CarritoCard";
import CartEmpty from "@/components/CartEmpty";
import { Detalle } from "@/components/Detalle";
import Main from "@/components/Main";
import { StepProgress } from "@/components/StepProgress";
import { CarritoContext } from "@/contexts/carrito/CarritoContext";
import { StepsProvider } from "@/contexts/StepsCart/StepsProvider";
import type { DataDirectionProps } from "@/types/DataDirectionProps";
import { useContext, useState } from "react";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { DataDirection } from "@/data/FormDataDirection";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Checkout() {
    const { carrito, vaciarCarrito, calcularTotalCarrito, calcularTotal, deleteElement } = useContext(CarritoContext);
    const [currentStep, setCurrentStep] = useState(1);

    const methods = useForm<DataDirectionProps>({
        mode: 'onChange'
    });

    const onSubmit: SubmitHandler<DataDirectionProps> = (data) => {
        setCurrentStep(currentStep + 1);
        console.log(data);
    }

    return (
        <FormProvider {...methods}>
            <StepsProvider>
                <Main>
                    {
                        carrito.length > 0 ?
                            <div className="p-5 flex flex-col gap-5">
                                <div className="flex justify-center w-full">
                                    <StepProgress currentStep={currentStep} />
                                </div>

                                <div className="flex gap-16 justify-center  pt-10">

                                    {currentStep == 1 && <div className="flex gap-5 w-full justify-center">
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
                                    </div>}

                                    {currentStep == 2 && <div className="flex flex-col gap-5 max-w-[800px] w-full font-medium items-center">
                                        <h2 className="text-white text-2xl">Seleccione una direccion de envio</h2>

                                        <form className="w-full flex flex-col gap-4  max-w-[500px]" onSubmit={methods.handleSubmit(onSubmit)}>
                                            {
                                                DataDirection.map((value) => (
                                                    <div key={value.id} className="w-full text-white">

                                                        <div className="flex flex-col gap-2 w-full">
                                                            <Label {...value} />
                                                            <Input {...value} />
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            <button
                                                className="bg-white  cursor-pointer text-black p-2 mt-10 rounded-[7px] font-medium hover:bg-neutral-400 transition-all"
                                            >
                                                Guardar direccion
                                            </button>
                                        </form>
                                    </div>}

                                    {
                                        currentStep === 3 &&
                                        <div className="text-[white] flex flex-col gap-4 justify-center items-center">
                                            <PackageCheck size={80} strokeWidth={1} />
                                            <div className="text-center w-full max-w-[500px] flex flex-col gap-2">
                                                <h2 className="text-3xl font-semibold">Orden realizada con exito</h2>
                                                <p className="text-gray-400">Tu orden ya se encuentra en proceso de preparacion.Te enviaremos un mail cuando despachemos el producto.</p>
                                            </div>
                                            <Link to='/' onClick={vaciarCarrito} className="text-black text-[17px] mt-5 bg-white px-3 py-2.5 rounded-[7px] hover:bg-neutral-400 transition-all">
                                                Ir al Home
                                            </Link>

                                        </div>
                                    }

                                </div>

                            </div>
                            :
                            <CartEmpty text="El carrito se encuentra vacio" />
                    }
                </Main>
            </StepsProvider>
        </FormProvider>
    )
}