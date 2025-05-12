import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingBasket } from "lucide-react"

interface HeaderProps {
    total: number;
}
export default function CartMenu({ total }: HeaderProps) {
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