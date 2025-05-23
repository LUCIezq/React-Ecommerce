import { CarritoContext } from "@/contexts/carrito/CarritoContext";
import { FavoritosContext } from "@/contexts/favoritos/FavoritosContext"
import type { ProductProps } from "@/types/ProductProps"
import { Heart } from "lucide-react"
import { useContext } from "react"
import { toast } from "sonner";

export default function Product({ item }: ProductProps) {

    const { favoritos, setFavoritos } = useContext(FavoritosContext);
    const { addToCart } = useContext(CarritoContext);

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

        <div className=" h-fit border-1 relative  bg-black border-[#ffffff4d] hover:shadow-xl/5 shadow-white 
                        cursor-pointer transition-all duration-400 w-full rounded-xl  hover:scale-105  ">

            <div className=" p-5 flex flex-col gap-10">
                <div className="flex flex-col gap-1 min-h-[100px]">
                    <span className="text-gray-700 font-medium">{item.category}</span>
                    <h2 className="text-gray-300 font-semibold text-[16px] hover:underline w-fit">{item.title}</h2>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-white font-medium">$ {item.price}</span>
                    <button className="border-1 border-white self-start px-3 py-1 text-white
                    rounded-2xl cursor-pointer hover:bg-white hover:text-black transition-all " onClick={() => addToCart(item)}>Comprar</button>
                </div>
            </div>
            <Heart fill={existElement() ? "white" : ""} className="absolute top-4 right-4 cursor-pointer" color="white " onClick={agregarFavorito} />
        </div >
    )
}