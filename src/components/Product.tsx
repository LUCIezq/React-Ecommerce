import { CarritoContext } from "@/contexts/carrito/CarritoContext";
import { FavoritosContext } from "@/contexts/favoritos/FavoritosContext"
import { UserContext } from "@/contexts/user/UserContext";
import type { ProductProps } from "@/types/ProductProps"
import { Heart } from "lucide-react"
import { useContext } from "react"
import { toast } from "sonner";
import PopoverAdmin from "./PopoverAdmin";
import { motion } from "motion/react"


export default function Product({ item }: ProductProps) {

    const { favoritos, setFavoritos } = useContext(FavoritosContext);
    const { addToCart } = useContext(CarritoContext);
    const { usuario } = useContext(UserContext);


    const existElement = () => {
        return favoritos.find((e) => e.id === item.id);
    }

    const agregarFavorito = () => {

        const exist = existElement();

        if (!exist) {
            setFavoritos(
                [...favoritos, item]

            )
            toast.success('Se agrego a tus favoritos')
        } else {
            setFavoritos((prevVal) => prevVal.filter((e) => e.id != item.id))
        }
    }

    return (

        <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className=" h-fit border-1 relative bg-white border-[#00000027] hover:border-[#00000083] hover:shadow-xl/5 shadow-white 
                        cursor-pointer transition-all duration-400 w-full rounded-xl  hover:scale-105 dark:bg-black dark:border-[#ffffff48]">

            <div className=" p-5 flex flex-col gap-10">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1 min-h-[100px]">
                        <span className="text-[#00000073] dark:text-[#ffffffa1] font-semibold text-[11px]">{item.category.toLocaleUpperCase()}</span>
                        <h2 className=" font-semibold text-[#000000a1] dark:text-white text-[16px] hover:underline w-fit">{item.title}</h2>
                    </div>
                    {usuario != null && usuario.rol === "ADMIN" &&
                        <div className="bg-[#2e2d2d4d] flex p-1
                        rounded-[5px] hover:bg-[#3a38387d] transition-all duration-300">
                            <PopoverAdmin item={item} />
                        </div>

                    }
                    {usuario != null && usuario.rol === "USUARIO" &&
                        <Heart fill={existElement() ? "white" : ""} className="absolute top-4 right-4 cursor-pointer" color="white " onClick={agregarFavorito} />}

                    {usuario == null &&
                        <></>}
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-[#000000a1] dark:text-white font-medium">$ {item.price.toLocaleString('es-AR')}</span>


                    {
                        (usuario == null || usuario.rol === "USUARIO") &&
                        <button className="border-1 border-[#000000a1] dark:border-white self-start px-3 py-1 
                    rounded-2xl cursor-pointer hover:bg-black hover:text-white transition-all text-[#000000a1] dark:text-white dark:hover:bg-white  dark:hover:text-black " onClick={() => addToCart(item)}>Comprar</button>
                    }

                </div>

            </div>
        </motion.div >
    )
}