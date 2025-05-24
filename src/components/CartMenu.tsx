import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import CartEmpty from "./CartEmpty";
import AlertDialogComponent from "./AlertDialogComponent";
import type { ApiData } from "@/types/ApiData";
import { useContext } from "react";
import { CarritoContext } from "@/contexts/carrito/CarritoContext";
import { UserContext } from "@/contexts/user/UserContext";
import { useNavigate } from "react-router-dom";
import { ShoppingBag } from 'lucide-react';


export default function CartMenu() {

    const { carrito, setCarrito, calcularTotal, calcularTotalCarrito } = useContext(CarritoContext);
    const { usuario } = useContext(UserContext);

    const Navigate = useNavigate();

    const payProducts = () => {
        if (usuario) {
            Navigate('/checkout')
        } else {
            Navigate('/sign-in')
        }
    }

    const incrementarCantidad = (item: ApiData): void => {
        setCarrito((prevCart) => {
            return prevCart.map(element => element.id === item.id ?
                { ...element, quantity: element.quantity + 1 } : element)
        })
    }

    const decrementarCantidad = (item: ApiData): void => {
        setCarrito((prevCart) => {
            const newCart = prevCart.map(element => element.id === item.id ?
                { ...element, quantity: element.quantity - 1 } : element)

            return newCart.filter(element => element.quantity > 0);
        })
    }

    return (
        <Sheet >
            <SheetTrigger className="flex items-center gap-1">
                <ShoppingBag strokeWidth={1} size={20} className="cursor-pointer" />
                <span className=" cursor-pointer font-medium text-center text-[#ffffff]">
                    {calcularTotal()}
                </span>
            </SheetTrigger>
            <SheetContent className="bg-[black] border-l-1 border-[#ffffff20]">
                <SheetHeader className="flex gap-5 h-full">
                    <SheetTitle className="text-2xl text-white pb-2">Carrito</SheetTitle>
                    <SheetDescription className="flex flex-col gap-5 h-full overflow-y-scroll scroll">
                        {carrito.length == 0 && <CartEmpty text="El carrito se encuentra actualmente vacio" />}
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col gap-3">
                                {carrito.map((item => {
                                    return (
                                        <div key={item.id} className="flex flex-col gap-5 bg-[#09090b33] rounded-[5px] py-3 px-4  ">
                                            <div className="flex items-center justify-between">
                                                <div className=" max-w-9/12 flex flex-col gap-1">
                                                    <span>{item.category}</span>
                                                    <span className="text-white text-[15px] hover:underline">{item.title}</span>
                                                </div>
                                                <AlertDialogComponent setCart={setCarrito} item={item} />
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-white font-medium text-[15px]">{item.quantity} x {item.price}</span>
                                                <div className="flex items-center hover:border-white border-1 gap-5 border-[#ffffff38] px-3 py-1.5 rounded-[12px] hover:text-white transition-all">
                                                    <button name="decrementar" className="cursor-pointer" onClick={() => decrementarCantidad(item)}>
                                                        <Minus />
                                                    </button>
                                                    <span>{item.quantity}</span>
                                                    <button name="incrementar" className="cursor-pointer" onClick={() => incrementarCantidad(item)}>
                                                        <Plus />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }))}
                            </div>
                            {carrito.length != 0 && <div className="p-5 text-white bg-[#09090b33] flex flex-col gap-5 ">
                                <div className="flex justify-between ">
                                    <span className="text-[20px] ">Total</span>
                                    <span className="text-[20px]">${calcularTotalCarrito()}</span>
                                </div>

                                <button onClick={payProducts} type="button" className="bg-[white] text-black font-medium text-[18px] w-full text-center m-auto p-1.5 rounded-[7px] cursor-pointer hover:bg-black transition-all hover:text-white">
                                    Pagar
                                </button>
                            </div>}
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}


