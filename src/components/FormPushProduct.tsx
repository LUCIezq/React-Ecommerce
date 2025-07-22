import { ProductosContext } from "@/contexts/productos/ProductosContext";
import { useContext } from "react";
import { useForm, type SubmitHandler } from "react-hook-form"
import { toast } from "sonner";
import Category from "./Category";

interface IFormInput {
    nombre: string;
    precio: number;
    descripcion: string;
    categoria: string;
}

export default function FormPushProducts({ setOpen }: { setOpen: (open: boolean) => void }) {
    const {
        register,
        handleSubmit,
        setValue,
    } = useForm<IFormInput>(); const { setData } = useContext(ProductosContext);

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log(data);

        const product = {
            title: data.nombre,
            price: data.precio,
            description: data.descripcion,
            category: data.categoria,
        };

        const BASE_URL = "https://687bafbbb4bc7cfbda86d0cb.mockapi.io/Productos";
        try {
            const res = await fetch(BASE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(product),
            });

            if (!res.ok) {
                throw new Error("Error al cargar el producto");
            }
            const nuevo = await res.json();
            setData((prev) => [...prev, nuevo]);
            toast.success("Producto cargado correctamente");
            setOpen(false);
        } catch (error) {
            console.error("Error al cargar el producto:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-5">
            <div className="flex flex-col gap-2 justify-start items-start w-full">
                <label htmlFor="nombre">Nombre</label>

                <input className="border-1 w-full p-2 rounded-[7px]" placeholder="Zapatillas Nike AirMax" id="nombre" type="text" {...register("nombre", { required: true })} />
            </div>

            <div className="flex flex-col gap-2 justify-start items-start w-full">
                <label htmlFor="precio">Precio</label>
                <input className="border-1 w-full p-2 rounded-[7px]" placeholder="$200.000" id="precio" type="number" {...register("precio", { required: true })} />
            </div>

            <div className="flex flex-col gap-2 justify-start items-start w-full">
                <label htmlFor="descripcion">Descripcion</label>
                <input className="border-1 w-full p-2 rounded-[7px]" placeholder="Usadas en buen estado" id="descripcion" type="text" {...register("descripcion", { required: true })} />
            </div>

            <div className="flex flex-col gap-2 justify-start items-start w-full">
                <label htmlFor="categoria">Categoria</label>
                <Category setValue={setValue} />
                {/* <input className="border-1 w-full p-2 rounded-[7px]" placeholder="Zapatillas" id="categoria" type="text" {...register("categoria", { required: true })} /> */}
            </div>

            <input type="submit" className="bg-white text-black w-fit px-7 py-2 rounded-[5px] font-semibold outline-0 m-auto" />

        </form>
    )
}