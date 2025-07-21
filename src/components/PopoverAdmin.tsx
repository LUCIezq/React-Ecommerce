import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Edit, EllipsisVerticalIcon, Trash } from "lucide-react"

export default function PopoverAdmin() {
    return (
        <Popover >
            <PopoverTrigger>
                <EllipsisVerticalIcon color="white" size={20} className="cursor-pointer" />
            </PopoverTrigger>
            <PopoverContent className="w-full min-w-[150px]">
                <div className="flex flex-col gap-2 text-white">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Edit size={17} />
                        <h2 className="font-medium">Editar</h2>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Trash size={17} />
                        <h2 className="text-red-600 font-medium">Eliminar</h2>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}