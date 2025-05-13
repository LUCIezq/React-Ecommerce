import { navLinks } from "@/data/navLinks"
import { NavLink } from "react-router-dom"
import type { NavLinkItem } from "@/types/NavLinkItem"
// import { User } from 'lucide-react';
// import { Heart } from "lucide-react";
import CartMenu from "./CartMenu";
import type { NavBarProps } from "@/types/NavBarProps";

export default function NavBar({ total, cart, setCart, hidden, setHidden }: NavBarProps) {
    return (
        <nav className="text-white  w-full flex justify-end">
            {!hidden && <ul className="fixed bg-[#09090b] inset-0 sm:hidden flex mt-12 flex-col gap-5 p-4">
                {navLinks.map((link: NavLinkItem) => (
                    <li onClick={() => setHidden(true)} className="rounded-[7px] text-4xl font-normal"
                        key={link.id}>
                        <NavLink to={link.path}
                        >{link.name}</NavLink>
                    </li>
                ))}
            </ul>}

            <div className="flex items-center justify-between gap-6">
                <CartMenu total={total} cart={cart} setCart={setCart} />
                {/* <User strokeWidth={1} className="cursor-pointer" />
                <Heart strokeWidth={1} className="cursor-pointer" /> */}
            </div>

        </nav >
    )
}

