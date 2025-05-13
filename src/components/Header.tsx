import { useState } from "react";
import Brand from "./Brand"
import NavBar from './NavBar'
import type { HeaderProps } from "@/types/HeaderProps";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react'

export default function Header({ total, cart, setCart }: HeaderProps) {

    const [hidden, setHidden] = useState<boolean>(true);

    const showMenu = () => {
        setHidden(!hidden);
    }

    return (
        <header className="bg-[#09090b] fixed left-0 right-0 border-b-1 border-[#ffffff22] p-5 flex justify-between items-center z-40">
            <div className=" cursor-pointer sm:hidden" onClick={showMenu}>
                {hidden ? <Menu color="white" /> : <X color="white" />}
            </div>
            <div className="hidden sm:block">
                <Brand showText={true} />
            </div>

            <NavBar setHidden={setHidden} hidden={hidden} total={total} cart={cart} setCart={setCart} />
        </header>
    )
}