import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserContext } from "@/contexts/user/UserContext";
import { useContext } from "react";
import { User } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { LogOut } from 'lucide-react';


export default function DropDownUser() {
    const { usuario } = useContext(UserContext);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer bg-black border-1 rounded-full w-9 h-9 text-white font-bold" >
                {usuario?.nombre.charAt(0)}
                {usuario?.apellido.charAt(0)}
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mr-5 border-1 border-[#ffffff20] bg-black text-white mt-5 flex flex-col gap-2">
                <DropdownMenuLabel className="text-[20px]">
                    <span>{usuario?.nombre} {usuario?.apellido}</span>
                    <h2 className="text-[14px] font-light">{usuario?.email}</h2>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <div className="flex flex-col gap-2.5">
                    <DropdownMenuItem className="cursor-pointer text-[15px] ">
                        <User color="white" />
                        Perfil</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-[15px] ">
                        <ShoppingBag color="white" />
                        Mis compras</DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="cursor-pointer text-[15px]">
                        <LogOut color="white" />
                        Cerrar sesión</DropdownMenuItem>
                </div>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}