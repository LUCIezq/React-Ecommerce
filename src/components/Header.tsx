import Brand from "./Brand"
import NavBar from './NavBar'
import type { HeaderProps } from "@/types/HeaderProps";

export default function Header({ total, cart, setCart }: HeaderProps) {
    return (
        <header className="bg-[#09090b] border-b-1 border-[#ffffff22] p-5 flex justify-between items-center">
            <Brand showText={false} />
            <NavBar total={total} cart={cart} setCart={setCart} />
        </header>
    )
}