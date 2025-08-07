import type { NavLinkItem } from "@/types/NavLinkItem"
import { NavLink } from "react-router-dom"
import { navLinks } from "@/data/navLinks"
import { navLinksAdmin } from "@/data/navLinks"
import { useContext } from "react"
import { UserContext } from "@/contexts/user/UserContext"

type Props = {
    setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavBar({ setHidden }: Props) {
    const { usuario } = useContext(UserContext);

    const links = usuario && usuario.rol === "ADMIN" ? navLinksAdmin : navLinks;

    return <>
        <ul className="fixed inset-0  w-full h-full p-5 pt-20 flex 
            flex-col gap-7 md:relative bg-[#0a0a0d] md:flex-row md:bg-transparent md:p-0 md:gap-10">

            {links.map((link: NavLinkItem) => (
                <li onClick={() => setHidden(true)} className="text-5xl md:text-[17px]"
                    key={link.id}>
                    <NavLink className={({ isActive }) =>
                        `px-4 py-2 text-black font-medium dark:text-white  hover:underline underline-offset-8 ${isActive ? "underline decoration-black dark:decoration-white" : ''}`}
                        to={link.path}
                    >{link.name}</NavLink>
                </li>
            ))}

        </ul >
    </>
} 