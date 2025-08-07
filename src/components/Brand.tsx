import { Link } from "react-router-dom"
import { Target } from 'lucide-react';

interface LogoProps {
    showText?: boolean
}

export default function Brand({ showText }: LogoProps) {
    return (<>
        <Link to={"/"} className="hidden md:flex items-center gap-2 w-fit bg-transparent
        text-black border-black dark:text-white px-2 py-1.5 rounded-[7px] font-medium border-1 dark:border-white">
            <Target />
            {showText && <span>Products.com</span>}
        </Link>
    </>)
}