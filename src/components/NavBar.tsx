import type { NavLinkItem } from "@/types/NavLinkItem"
import { NavLink } from "react-router-dom"
import { navLinks } from "@/data/navLinks"

type Props = {
    setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavBar({ setHidden }: Props) {
    return <>
        <ul className="fixed inset-0 bg-[#09090b] w-full h-full p-5 pt-20 flex 
            flex-col gap-3 md:relative md:flex-row md:p-0 md:gap-10">

            {navLinks.map((link: NavLinkItem) => (
                <li onClick={() => setHidden(true)} className="text-5xl md:text-[20px]"
                    key={link.id}>
                    <NavLink className={({ isActive }) =>
                        ` ${isActive ? "underline" : ""}`}
                        to={link.path}
                    >{link.name}</NavLink>
                </li>
            ))}

        </ul >
    </>
} 