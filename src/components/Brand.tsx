import { Link } from "react-router-dom"
import { BrandIcon } from "./Icons"

interface LogoProps {
    showText?: boolean
}

export default function Brand({ showText }: LogoProps) {
    return (<>
        <Link to={"/"} className="flex items-center gap-2 w-fit bg-transparent
        text-white px-2 py-1.5 rounded-[7px] font-medium border-1 border-white">
            <BrandIcon />
            {showText && <span>Products.com</span>}
        </Link>
    </>)
}