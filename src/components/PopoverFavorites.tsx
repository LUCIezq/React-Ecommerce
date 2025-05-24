import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { FavoritosContext } from "@/contexts/favoritos/FavoritosContext";
import { Heart } from "lucide-react"
import { useContext } from "react";
import { Trash2 } from "lucide-react";
import type { ApiData } from "@/types/ApiData";
export default function PopoverFavorites() {

    const { favoritos, setFavoritos } = useContext(FavoritosContext);

    const eliminarFavorito = (element: ApiData) => {
        setFavoritos((prevVal) =>
            prevVal.filter((e) => e.id != element.id)
        )
    }

    return (

        <Popover>
            <PopoverTrigger asChild>
                <Button variant="default" aria-label="favoritos" className="cursor-pointer">
                    <Heart strokeWidth={2} color="white" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96 mt-3 mr-5 bg-[#09090b] ">
                <div className="grid gap-4 max-h-[350px] overflow-scroll">
                    <div className="space-y-2">
                        <h4 className="font-medium text-white leading-none border-b-1 border-[#ffffff1f] pb-3">Favoritos</h4>
                    </div>
                    {
                        favoritos.length === 0 && <p className="text-[#ffffff98] text-center font-medium">Aun no tenes favoritos en tu lista</p>
                    }
                    {favoritos.map((e) =>
                        <div key={e.id} className="text-white flex justify-between items-center border-b-1 border-[#ffffff1f] pb-5">
                            <div className="grid gap-1" >
                                <span className="text-[13px]" >{e.category}</span>
                                <h2 className="font-medium text-[17px] max-w-[270px]">{e.title}</h2>
                                <span> ${e.price}</span>
                            </div>
                            <Trash2 onClick={() => eliminarFavorito(e)} strokeWidth={2} size={20} className="cursor-pointer" />
                        </div>
                    )}

                </div>
            </PopoverContent>
        </Popover >
    )
}
