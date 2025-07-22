import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
// import { ProductosContext } from "@/contexts/productos/ProductosContext";
import type { ApiData } from "@/types/ApiData";
import { EllipsisVerticalIcon } from "lucide-react"
import AlertDialogComponent from "./AlertDialogComponent";
import { ProductosContext } from "@/contexts/productos/ProductosContext";
import { useContext } from "react";
import { toast } from "sonner";
import UpdateProducts from "./UpdateProducts";
// import { useContext } from "react";


interface PopoverAdminProps {
    item: ApiData;
}

export default function PopoverAdmin({ item }: PopoverAdminProps) {

    const BASE_URL = "https://687bafbbb4bc7cfbda86d0cb.mockapi.io/Productos";

    const { setData } = useContext(ProductosContext);

    const eliminarProducto = async (item: ApiData) => {
        await fetch(`${BASE_URL}/${item.id}`, { method: "DELETE" });
        setData((prev) => prev.filter((p) => p.id !== item.id));
        toast.success("Producto eliminado correctamente");
    };

    return (
        <Popover>
            <PopoverTrigger>
                <EllipsisVerticalIcon color="white" size={20} className="cursor-pointer" />
            </PopoverTrigger>
            <PopoverContent className="w-full min-w-[150px]">
                <div className="flex flex-col gap-3 text-white">
                    <div className="flex items-center gap-3 cursor-pointer px-2 py-1 hover:bg-[#3a38387d] transition-all duration-300 rounded-[5px]">
                        <UpdateProducts item={item} />
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer px-2 py-1 hover:bg-[#3a38387d] transition-all duration-300 rounded-[5px]">
                        <AlertDialogComponent item={item} text="Eliminar" handleFunction={eliminarProducto} />
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}