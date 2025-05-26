import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { FavoritosContext } from "@/contexts/favoritos/FavoritosContext";
import { Heart, Trash } from "lucide-react"
import { useContext } from "react";
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
                <Button variant="default" aria-label="favoritos" className="cursor-pointer bg-transparent">
                    <div className="relative">
                        <Heart strokeWidth={2} color="white" />
                        {
                            favoritos.length > 0 && <div className="bg-white w-[5px] h-[5px] rounded-full absolute top-[0] right-[-1px]"></div>
                        }
                    </div>

                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96 mt-3 mr-5 border-[#ffffff39] bg-[black] ">
                <div className="grid gap-4 max-h-[350px] overflow-scroll">
                    <div className="space-y-2">
                        <h4 className="font-medium text-white text-2xl leading-none pb-3">Favoritos</h4>
                    </div>
                    {
                        favoritos.length === 0 && <p className="text-[#ffffff98] text-center">Aun no tenes favoritos en tu lista</p>
                    }
                    {favoritos.map((e) =>
                        <div key={e.id} className="text-white flex justify-between items-center bg-[#09090b33] rounded-[5px] py-3 px-4">
                            <div className="grid gap-1" >
                                <span className="text-[13px] text-[#ffffff8f]" >{e.category}</span>
                                <h2 className="font-medium text-[14px] max-w-[270px]">{e.title}</h2>
                                <span className="pt-1.5 font-medium"> ${e.price}</span>
                            </div>
                            <Trash onClick={() => eliminarFavorito(e)} strokeWidth={2} size={20} className="cursor-pointer" />
                        </div>
                    )}

                </div>
            </PopoverContent>
        </Popover >
    )
}
