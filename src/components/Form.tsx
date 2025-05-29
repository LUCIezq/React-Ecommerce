import { EyeClosed } from "lucide-react";
import { Eye } from "lucide-react";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { Label } from "./Label";
import { Input } from "./Input";
import type { FormProps } from "@/types/FormProps";

export const Form = ({ onSubmit, data, methods }: FormProps) => {

    const [toggle, setToggle] = useState<boolean>(true);

    const setToggleIcon = (): void => {
        setToggle(!toggle);
    };

    return (
        //usamos esto para que todos los componentes hijos puedan acceder a los metodos de react-hook-form.
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="flex text-white flex-col max-w-96 w-full gap-4 mt-10"
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
                    className="bg-white cursor-pointer hover:bg-[#ffffffee] text-black p-2 mt-10 rounded-[7px] font-medium"
                    type="submit"
                >
                    {data.button}
                </button>
            </form>
        </FormProvider>
    );
};
