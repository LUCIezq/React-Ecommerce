import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ProductosContext } from "@/contexts/productos/ProductosContext";
// import { ProductosContext } from "@/contexts/productos/ProductosContext";
import type { ApiData } from "@/types/ApiData";
import { Edit, EllipsisVerticalIcon } from "lucide-react"
import { useContext } from "react";
import AlertDialogComponent from "./AlertDialogComponent";
// import { useContext } from "react";


interface PopoverAdminProps {
    item: ApiData;
}

export default function PopoverAdmin({ item }: PopoverAdminProps) {

    const { setData } = useContext(ProductosContext);

    const eliminarProducto = () => {
        setData(
            prevValue => prevValue.filter(e => e.id != item.id)
        )
    }

    return (
        <Popover>
            <PopoverTrigger>
                <EllipsisVerticalIcon color="white" size={20} className="cursor-pointer" />
            </PopoverTrigger>
            <PopoverContent className="w-full min-w-[150px]">
                <div className="flex flex-col gap-3 text-white">
                    <div className="flex items-center gap-3 cursor-pointer px-2 py-1 hover:bg-[#3a38387d] transition-all duration-300 rounded-[5px]">
                        <Edit size={17} />
                        <h2 className="font-medium">Editar</h2>
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer px-2 py-1 hover:bg-[#3a38387d] transition-all duration-300 rounded-[5px]">
                        <AlertDialogComponent item={item} handleFunction={eliminarProducto} />
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}