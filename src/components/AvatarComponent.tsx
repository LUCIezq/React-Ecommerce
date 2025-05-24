import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { UserContext } from "@/contexts/user/UserContext";
import { useContext } from "react";

export default function AvatarComponent() {

    const { usuario } = useContext(UserContext);

    return (
        <Avatar>
            <AvatarFallback className="text-black font-bold cursor-pointer">
                {usuario?.nombre.charAt(0)}{usuario?.apellido.charAt(0)}
            </AvatarFallback>
        </Avatar>
    )
}

