import { RadioGroup } from "@/components/ui/radio-group"
import { RadioItem } from "./RadioItem"

interface Filter {
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filter({ setFilter }: Filter) {

    return (
        <div className="grid gap-5 border-l-1 pl-7 border-[#0000001c] dark:border-[#ffffff36]">
            <h2 className="text-[#000000d2] dark:text-white text-[20px] font-medium">Selecciona la categoria</h2>

            <RadioGroup onValueChange={(event) => setFilter(event)} defaultValue="All" className="text-black dark:text-white">
                <RadioItem value="All" name="Todos" />
                <RadioItem value="calzado" name="Calzado" />
                <RadioItem value="tecnología" name="Tecnología" />
                <RadioItem value="ropa" name="Ropa" />
                <RadioItem value="electrodomésticos" name="Electrodomésticos" />
                <RadioItem value="muebles" name="Muebles" />
                <RadioItem value="accesorios" name="Accesorios" />
                <RadioItem value="hogar" name="Hogar" />
                <RadioItem value="cocina" name="Cocina" />
                <RadioItem value="perfumería" name="Perfumería" />
                <RadioItem value="belleza" name="Belleza" />
                <RadioItem value="libros" name="Libros" />
            </RadioGroup>
        </div>
    )
}