import type { InputProps } from "@/types/InputProps";
import { useFormContext } from "react-hook-form";

export const Input = ({ id, type, placeholder, name, rules }: InputProps) => {
    const { formState: { errors }, register } = useFormContext();

    return (
        <>
            <input
                id={id}
                className={`w-full border-1 bg-black  p-3 rounded-[7px] outline-0 ${errors[name] ? ' border-red-500' : 'border-[#ffffff7c]'} `}
                type={type}
                placeholder={placeholder}
                {...register(name, rules)}
            />

            {errors[name]?.message && <p className="text-red-700 text-[15px]">{errors[name].message?.toString()}</p>}
        </>
    )
}