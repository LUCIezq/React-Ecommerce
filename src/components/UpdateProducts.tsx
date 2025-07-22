import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import type { ApiData } from "@/types/ApiData";
import { Edit } from "lucide-react";
import { useContext, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Category from "./Category";
import { ProductosContext } from "@/contexts/productos/ProductosContext";
import { toast } from "sonner";

interface IFormInput {
    nombre: string;
    precio: number;
    descripcion: string;
    categoria: string;
}

interface UpdateProductsProps {
    item: ApiData;
}
export default function UpdateProducts({ item }: UpdateProductsProps) {
    const { setData } = useContext(ProductosContext);
    const [open, setOpen] = useState(false);
    const BASE_URL = "https://687bafbbb4bc7cfbda86d0cb.mockapi.io/Productos";
    const { register, handleSubmit, setValue } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {

        const product = {
            title: data.nombre,
            price: data.precio,
            description: data.descripcion,
            category: data.categoria,
        };

        const res = await fetch(`${BASE_URL}/${item.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });

        if (!res.ok) {
            throw new Error("Error al actualizar el producto");
        }
        setOpen(false);
        toast.success("Producto actualizado correctamente");
        const actualizado = await res.json();
        setData((prev) => prev.map((p) => (p.id === item.id ? actualizado : p)));
    }


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="flex items-center gap-2 justify-end w-full cursor-pointer">
                <div className="flex w-full items-center gap-2.5">
                    <Edit size={17} />
                    <h2 className="font-medium">Editar</h2>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Actualizar producto</DialogTitle>
                    <DialogDescription>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    defaultValue={item.title}
                                    className="border-1 w-full p-2 rounded-[7px]"
                                    placeholder="Zapatillas Nike AirMax"
                                    id="nombre"
                                    type="text"
                                    {...register("nombre", { required: true })}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="precio">Precio</label>
                                <input
                                    defaultValue={item.price}
                                    className="border-1 w-full p-2 rounded-[7px]"
                                    placeholder="99.99"
                                    id="precio"
                                    type="number"
                                    {...register("precio", { required: true, valueAsNumber: true })}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="descripcion">Descripción</label>
                                <input
                                    defaultValue={item.description}
                                    className="border-1 w-full p-2 rounded-[7px]"
                                    placeholder="Descripción del producto"
                                    id="descripcion"
                                    type="text"
                                    {...register("descripcion", { required: true })}
                                />
                            </div>

                            <Category setValue={setValue} />

                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-[7px] mt-4">
                                Actualizar
                            </button>
                        </form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}