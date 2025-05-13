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

import { toast } from 'sonner'

import { Trash2 } from 'lucide-react';
interface ApiData {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    imageUrl: string,
    quantity: number
}

interface Alert {
    item: ApiData;
    setCart: React.Dispatch<React.SetStateAction<ApiData[]>>;
}

export default function AlertDialogComponent({ item, setCart }: Alert) {

    const deleteElement = (item: ApiData) => {
        setCart(prevCart => prevCart.filter(element => !(element.id == item.id)))
        toast.error('Producto eliminado')

    }

    return <>
        <AlertDialog>
            <AlertDialogTrigger  >
                <Trash2 strokeWidth={2} size={18} className="cursor-pointer hover:text-white transition-all" />
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#09090b]">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-white">¿Seguro que querés eliminar este producto?</AlertDialogTitle>
                    <AlertDialogDescription className="text-white">
                        Una vez eliminado, no vas a poder recuperarlo.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => deleteElement(item)} className="hover:bg-red-800">Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    </>
}