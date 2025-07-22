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
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";


export default function DropDownUser() {
    const { usuario, setUsuario } = useContext(UserContext);
    const navigate = useNavigate();

    const cerrarSesion = () => {
        setUsuario(null);
        navigate('/');
        toast.success('Sesión cerrada con exito')
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer bg-black border-1 rounded-full w-9 h-9 text-white font-bold" >
                {usuario?.nombre.charAt(0).toUpperCase()}
                {usuario?.apellido.charAt(0).toUpperCase()}
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mr-5 border-1 border-[#ffffff20] text-white mt-5 flex flex-col gap-2 min-h-[100px]">
                <DropdownMenuLabel className="text-[20px]">
                    <span>{usuario?.nombre} {usuario?.apellido}</span>
                    <h2 className="text-[14px] font-light">{usuario?.email}</h2>
                </DropdownMenuLabel>

                <div className="flex flex-col gap-.8 h-full">
                    <Link to='/perfil'>

                        {usuario && usuario.rol !== "ADMIN" && <DropdownMenuItem className="cursor-pointer text-[15px] font-medium ">
                            <User color="white" strokeWidth={2} />
                            Perfil
                        </DropdownMenuItem>}
                    </Link>

                    <Link to='/perfil/compras'>
                        {usuario && usuario.rol !== "ADMIN" && <DropdownMenuItem className="cursor-pointer text-[15px] font-medium ">
                            <ShoppingBag color="white" />
                            Mis compras
                        </DropdownMenuItem>}
                    </Link>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem onClick={cerrarSesion} className="cursor-pointer  font-medium text-[15px]">
                        <LogOut color="white" />
                        Cerrar sesión</DropdownMenuItem>
                </div>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}