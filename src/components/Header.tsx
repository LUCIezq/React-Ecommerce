import Brand from "./Brand"
import type { HeaderProps } from "@/types/HeaderProps";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react'
import { useState } from "react";
import CartMenu from "./CartMenu";
import { User } from 'lucide-react';
import { Heart } from "lucide-react";
import Nav from "./Nav";

export default function Header({ total, cart, setCart }: HeaderProps) {

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
                <CartMenu total={total} cart={cart} setCart={setCart} />
                <Heart strokeWidth={1} color="white" className="cursor-pointer" />
                <User strokeWidth={1} color="white" className="cursor-pointer" />
            </div>

        </header>
    )
}