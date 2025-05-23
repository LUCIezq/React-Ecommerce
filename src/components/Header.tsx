import Brand from "./Brand"
import { Menu } from 'lucide-react';
import { X } from 'lucide-react'
import { useState } from "react";
import CartMenu from "./CartMenu";
import { User } from 'lucide-react';
import Nav from "./Nav";
import PopoverFavorites from "./PopoverFavorites";

export default function Header() {

    const [hidden, setHidden] = useState(true);

    const showMenu = () => {
        setHidden(!hidden);
    }

    return (
        <header className="bg-[#09090b] fixed left-0 right-0 border-b-1 border-[#ffffff22] p-5 flex justify-between items-center z-40">

            <div className="cursor-pointer z-50 md:hidden" onClick={showMenu}>
                {hidden ?
                    <Menu color="white" /> :
                    <X color="white" />
                }
            </div>

            <Brand showText={true} />

            <Nav hidden={hidden} setHidden={setHidden} />

            <div className="flex items-center justify-between gap-3 text-white">
                <CartMenu />
                <PopoverFavorites />
                <User strokeWidth={1} color="white" className="cursor-pointer" />
            </div>

        </header>
    )
}