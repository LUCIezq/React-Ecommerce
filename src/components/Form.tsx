import { EyeClosed } from "lucide-react";
import { Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import type { FormData } from "@/types/FormData";
import { Label } from "./Label";
import { Input } from "./Input";
import type { DataLoginProps } from "@/types/DataLoginProps";

interface FormProps {
    onSubmit: SubmitHandler<FormData>;
    data: DataLoginProps[];
}

export const Form = ({ onSubmit, data }: FormProps) => {

    const methods = useForm<FormData>(); //obtenemos todos los metodos de react-hook-form para mandarlos al FormProvider y a todos sus componentes hijos

    // const {
    //     formState: { errors },
    // } = useForm<FormData>();

    const [toggle, setToggle] = useState<boolean>(false);

    const setToggleIcon = (): void => {
        setToggle(!toggle);
    };

    //Estaria bueno q el componente pudiera recibir un array de objetos con los datos de un input, iterarlos y crearlos dinamicamente.

    //Necesito alternar el type del input de password a text y viceversa al hacer click en el icono del ojo.

    //crear la vista sign-up con los mismos componentes pero con los datos de otro array de objetos.


    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="flex flex-col max-w-96 w-full gap-4"
            >
                {
                    data.map((item) => (
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

                <Link to="/recovery" className="text-end hover:underline">
                    ¿Olvidaste tu contraseña?
                </Link>

                <button
                    className="bg-white cursor-pointer hover:bg-[#ffffffd1] text-black p-2 mt-5 rounded-[7px] font-medium"
                    type="submit"
                >
                    Iniciar sesión
                </button>

            </form>
        </FormProvider>
    );
};
