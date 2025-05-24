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

export default function Header() {

    const [hidden, setHidden] = useState(true);
    const { usuario } = useContext(UserContext);

    const showMenu = () => {
        setHidden(!hidden);
    }

    return (
        <header className="bg-[black] fixed left-0 right-0  p-5 flex justify-between items-center z-40">

            <div className="cursor-pointer z-50 md:hidden" onClick={showMenu}>
                {hidden ?
                    <Menu color="white" /> :
                    <X color="white" />
                }
            </div>

            <Brand showText={true} />

            <Nav hidden={hidden} setHidden={setHidden} />

            <div className="flex items-center justify-between gap-7 text-white">
                <div className="flex gap-5">
                    <CartMenu />
                    {usuario != null ? <PopoverFavorites /> : <></>}
                </div>

                {
                    usuario == null ? <Link className=" font-medium transition-all border-1 border-white p-2 rounded-2xl hover:bg-white hover:text-black" to="/sign-in" >Iniciar sesion</Link> : <DropDownUser />
                }
            </div>

        </header>
    )
}