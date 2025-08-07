import Brand from "./Brand"
import { Menu } from 'lucide-react';
import { X } from 'lucide-react'
import { useContext, useState } from "react";
import CartMenu from "./CartMenu";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { UserContext } from "@/contexts/user/UserContext";
import PopoverFavorites from "./PopoverFavorites";
import DropDownUser from "./DropDownUser";
import ToggleDarkMode from "./ToggleDarkMode";

export default function Header() {

    const [hidden, setHidden] = useState(true);
    const { usuario } = useContext(UserContext);

    const showMenu = () => {
        setHidden(!hidden);
    }

    return (
        <header className="bg-[white] dark:bg-black  fixed left-0 right-0  p-5 flex justify-between items-center z-40 ">

            <div className="cursor-pointer z-50 md:hidden" onClick={showMenu}>
                {hidden ?
                    <Menu color="white" /> :
                    <X color="white" />
                }
            </div>

            <Brand showText={true} />

            <Nav hidden={hidden} setHidden={setHidden} />

            <div className="flex items-center justify-between gap-5 text-white">

                {
                    usuario == null ?
                        <Link className=" font-medium text-[14px] transition-all border-1 border-black text-black dark:text-white dark:border-white px-2 py-1.5 rounded-2xl hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black " to="/sign-in" >Iniciar sesion</Link> : <DropDownUser />
                }

                {(usuario == null || usuario.rol === "USUARIO") && (
                    <div className="flex gap-3">
                        <CartMenu />
                        {usuario && <PopoverFavorites />}

                        <ToggleDarkMode />
                    </div>
                )}


            </div>

        </header>
    )
}