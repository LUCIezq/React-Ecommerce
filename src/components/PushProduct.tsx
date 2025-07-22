import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react";
import FormPushProducts from "./FormPushProduct";
import { useState } from "react";

export default function PushProduct() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="flex items-center gap-2 justify-end w-full cursor-pointer">
                <h2 className="font-semibold hover:underline">Cargar producto</h2>
                <div className="bg-[#151315] hover:bg-[#1f1c1f] p-1 rounded-[7px]">
                    <Plus />
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Carga de productos</DialogTitle>
                    <DialogDescription>
                        <FormPushProducts setOpen={setOpen} />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}