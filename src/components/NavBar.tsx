import { navLinks } from "@/data/navLinks"
import { NavLink } from "react-router-dom"
import type { NavLinkItem } from "@/types/NavLinkItem"
import { User } from 'lucide-react';
import { Heart } from "lucide-react";
import CartMenu from "./CartMenu";

interface HeaderProps {
    total: number;
}

export default function NavBar({ total }: HeaderProps) {
    return (
        <nav className="text-white  w-full justify-between flex">
            <ul className="flex gap-7 m-auto -200">
                {navLinks.map((link: NavLinkItem) => (
                    <li className="rounded-[7px] text-[15px] font-normal   
                    "
                        key={link.id}>
                        <NavLink to={link.path} className={({ isActive }) =>
                            `px-2 py-1.5 block rounded-[7px] border border-transparent hover: shadow-md hover:shadow-lg 
                            transition-all duration-200 ${isActive ? 'border-white' : 'border-transparent hover:border-white'}`
                        }>{link.name}</NavLink>
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-between gap-6">
                <CartMenu total={total} />
                <User strokeWidth={1} className="cursor-pointer" />
                <Heart strokeWidth={1} className="cursor-pointer" />
            </div>

        </nav >
    )
}

