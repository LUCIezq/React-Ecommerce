import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Trash } from 'lucide-react';
import type { Alert } from "@/types/Alert";
import { useContext } from "react";
import { CarritoContext } from "@/contexts/carrito/CarritoContext";

export default function AlertDialogComponent({ item }: Alert) {

    const { deleteElement } = useContext(CarritoContext);

    return <>
        <AlertDialog>
            <AlertDialogTrigger  >
                <Trash strokeWidth={2} size={18} className="cursor-pointer hover:text-white transition-all" />
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#09090b] w-[min(450px,100%)] justify-center items-center flex flex-col gap-5 border-[#ffffff26]">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-white">¿Seguro que querés eliminar este producto?</AlertDialogTitle>
                    <AlertDialogDescription className="text-white text-center">
                        Una vez eliminado, no vas a poder recuperarlo.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="m-auto">
                    <AlertDialogCancel className="cursor-pointer">Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={() => deleteElement(item)} className="hover:bg-red-800 cursor-pointer">Continuar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    </>
}