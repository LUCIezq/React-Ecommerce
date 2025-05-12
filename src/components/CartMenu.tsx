import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingBasket } from "lucide-react"
import { useState } from "react";


export default function CartMenu() {


    const [total, setTotal] = useState<number>(() => {
        try {
            const totalStored = localStorage.getItem('total');
            return totalStored ? JSON.parse(totalStored) : 0;
        } catch (error) {
            console.error('error al cargar el carrito', error)
            return [];
        }
    });

    return (
        <Sheet >
            <SheetTrigger className="flex items-center gap-1">
                <ShoppingBasket strokeWidth={1} className="cursor-pointer" />
                <span className=" cursor-pointer text-center text-[#ffffffb0]">
                    {total}
                </span>
            </SheetTrigger>
            <SheetContent className="bg-black">
                <SheetHeader className="flex gap-5">
                    <SheetTitle className="text-2xl text-white">Carrito</SheetTitle>
                    <SheetDescription className="flex flex-col gap-5">

                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}