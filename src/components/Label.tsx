import { useFormContext } from "react-hook-form";
import type { LabelProps } from "@/types/LabelProps";

export const Label = ({ name, label }: LabelProps) => {

    //-> Obtengo el objeto formState y dentro de ese objeto el objeto errors.
    const { formState: { errors } } = useFormContext(); // -> useFormContext -> Me permite obtener el contexto del carrito desde cualquier componente.

    return (
        <label
            htmlFor={name}
            className={`font-medium ${errors[name] ? 'text-red-900' : 'text-[#ffffffd4]'}`}>{label} *
        </label>
    )
}