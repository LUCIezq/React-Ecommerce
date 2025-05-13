import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {ShoppingBasket } from "lucide-react"

import { Trash2 } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import type React from "react";
import CartEmpty from "./CartEmpty";


interface ApiData {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    imageUrl: string,
    quantity: number
}
interface HeaderProps {
    total: number;
    cart: ApiData[]
    setCart: React.Dispatch<React.SetStateAction<ApiData[]>>;
}

export default function CartMenu({ total, cart, setCart }: HeaderProps) {


    const incrementarCantidad = (item: ApiData): void => {
        setCart((prevCart)=>{
            return prevCart.map(element => element.id === item.id ?
                    { ...element, quantity: element.quantity + 1 } : element)
        })
    }

    const decrementarCantidad = (item: ApiData): void => {
        setCart((prevCart)=>{
            const newCart = prevCart.map(element => element.id === item.id?
            { ...element, quantity: element.quantity - 1 } : element)

        return newCart.filter(element=>element.quantity>0);
        })
    }


    return (
        <Sheet >
            <SheetTrigger className="flex items-center gap-1">
                <ShoppingBasket strokeWidth={1} className="cursor-pointer" />
                <span className=" cursor-pointer text-center text-[#ffffffb0]">
                    {total}
                </span>
            </SheetTrigger>
            <SheetContent className="bg-black border-[#ffffff4b] ">
                <SheetHeader className="flex gap-5 h-full">
                    <SheetTitle className="text-2xl text-white pb-2">Carrito</SheetTitle>
                    <SheetDescription className="flex flex-col gap-5 h-full overflow-y-scroll scroll">
                        {cart.length==0 && <CartEmpty text="El carrito se encuentra actualmente vacio"/>}    
                    {cart.map((item => {
                            return (
                                <div key={item.id} className="flex flex-col gap-5 border-b-1 
                            border-[#ffffff15] pb-5 ">
                                    <div className="flex items-center justify-between">
                                        <div className=" max-w-9/12 flex flex-col gap-1">
                                            <span>{item.category}</span>
                                            <span className="text-white text-[15px] hover:underline">{item.title}</span>
                                        </div>
                                        <Trash2 strokeWidth={2} size={18} className="cursor-pointer hover:text-white transition-all" />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-white font-medium text-[15px]">{item.quantity} x {item.price}</span>
                                        <div className="flex items-center hover:border-white border-1 gap-5 border-[#ffffff38] px-3 py-1.5 rounded-[12px] hover:text-white transition-all">
                                            <button name="decrementar" className="cursor-pointer" onClick={()=>decrementarCantidad(item)}>
                                                <Minus />
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button name="incrementar" className="cursor-pointer" onClick={()=>incrementarCantidad(item)}>
                                                <Plus />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }))}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}