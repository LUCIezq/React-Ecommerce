import Brand from "./Brand"
import NavBar from './NavBar'

export default function Header() {
    return (
        <header className="bg-[black] p-5 flex justify-between items-center">
            <Brand showText={false} />
            <NavBar />
        </header>
    )
}