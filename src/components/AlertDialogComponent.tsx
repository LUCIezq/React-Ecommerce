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

export default function AlertDialogComponent({ item, handleFunction, text }: Alert) {

    return <>
        <AlertDialog>
            <AlertDialogTrigger  >
                <div className="flex items-center  gap-3 cursor-pointer">
                    <Trash strokeWidth={2} size={18} className="cursor-pointer hover:text-white transition-all " />
                    <h2 className="text-red-600 font-medium">{text}</h2>
                </div>
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
                    <AlertDialogAction onClick={() => handleFunction(item)} className="bg-red-800 hover:bg-red-500 text-white  cursor-pointer">Continuar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    </>
}