import Brand from "./Brand"
import NavBar from './NavBar'

interface HeaderProps {
    total: number;
}

export default function Header({ total }: HeaderProps) {
    return (
        <header className="bg-[black] p-5 flex justify-between items-center">
            <Brand showText={false} />
            <NavBar total={total} />
        </header>
    )
}