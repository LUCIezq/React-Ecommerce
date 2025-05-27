import { EyeClosed } from "lucide-react";
import { Eye } from "lucide-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { FormDataSignUp } from "@/types/FormData";
import { Label } from "./Label";
import { Input } from "./Input";
import type { FormProps } from "@/types/FormProps";


export const Form = ({ onSubmit, data }: FormProps) => {

    const methods = useForm<FormDataSignUp>(); //obtenemos todos los metodos de react-hook-form para mandarlos al FormProvider y a todos sus componentes hijos.

    const [toggle, setToggle] = useState<boolean>(true);

    const setToggleIcon = (): void => {
        setToggle(!toggle);
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="flex text-white flex-col max-w-96 w-full gap-4"
            >
                {
                    data.data.map((item) => (
                        <div key={item.id} className="flex flex-col gap-3 w-full relative">
                            <Label name={item.name} label={item.label} />
                            <Input id={item.id} name={item.name} placeholder={item.placeholder} type={item.type} rules={item.Rules} />

                            {
                                item.type === "password" && (
                                    <div
                                        onClick={setToggleIcon}
                                        className="cursor-pointer absolute top-13 right-5"
                                    >
                                        {toggle !== false ? <EyeClosed size={20} /> : <Eye size={20} />}
                                    </div>
                                )
                            }
                        </div>
                    ))
                }

                <button
                    className="bg-white cursor-pointer hover:bg-[#ffffffd1] text-black p-2 mt-5 rounded-[7px] font-medium"
                    type="submit"
                >
                    {data.button}
                </button>
            </form>
        </FormProvider>
    );
};
