import { RadioGroup } from "@/components/ui/radio-group"
import { RadioItem } from "./RadioItem"

interface Filter {
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filter({ setFilter }: Filter) {

    return (
        <div className="grid gap-5">
            <h2 className="text-white text-[20px] font-medium">Selecciona la categoria</h2>

            <RadioGroup onValueChange={(event) => setFilter(event)} defaultValue="All" className="text-white">
                <RadioItem value="All" name="Todos" />
                <RadioItem value="men's clothing" name="Ropa masculina" />
                <RadioItem value="jewelery" name="Joyas" />
                <RadioItem value="electronics" name="Electronica" />
                <RadioItem value="women's clothing" name="Ropa femenina" />
            </RadioGroup>
        </div>
    )
}