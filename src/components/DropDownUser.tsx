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
            <DropdownMenuTrigger className="cursor-pointer bg-white rounded-full w-9 h-9 text-black font-bold" >
                {usuario?.nombre.charAt(0)}
                {usuario?.apellido.charAt(0)}
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mr-5 mt-5 flex flex-col gap-2">
                <DropdownMenuLabel className="text-[20px]">
                    <span>{usuario?.nombre} {usuario?.apellido}</span>
                    <h2 className="text-[14px] font-light text-[#000000d5]">{usuario?.email}</h2>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <div className="flex flex-col gap-2.5">
                    <DropdownMenuItem className="cursor-pointer text-[#000000c9]">
                        <User />
                        Perfil</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-[#000000c9]">
                        <ShoppingBag />
                        Mis compras</DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="cursor-pointer text-[#000000c9]">
                        <LogOut />
                        Cerrar sesión</DropdownMenuItem>
                </div>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}