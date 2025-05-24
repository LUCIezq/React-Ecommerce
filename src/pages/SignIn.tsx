import Main from "@/components/Main";
import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from 'react-hook-form'
import { EyeClosed } from 'lucide-react';
import { Eye } from 'lucide-react';
import { useContext, useState } from "react";
import { User } from 'lucide-react';
import { UserContext } from "@/contexts/user/UserContext";
interface FormData {
    email: string;
    password: string
}

export default function SignIn() {

    const { setUsuario } = useContext(UserContext);
    const navigate = useNavigate();

    const messages = {
        req: "Este campo es obligatorio",
        email: "Debes introducir una dirección de email valida. Ej: alguien@algo.com",
        password: "La contraseña debe tener una longitud minima de 8 caracteres."
    };

    const [hidden, setHidden] = useState<string>('password');

    const { register, handleSubmit,
        formState: { errors }, reset
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = ((data) => {

        const user = {
            nombre: 'Ezequiel',
            apellido: 'Luci',
            email: data.email,
            password: data.password,

        }

        setUsuario(user);
        reset();
        navigate(`/`)
    })

    const setToggleIcon = (): void => {
        setHidden(
            hidden === 'password' ? 'text' : 'password'
        )
    }

    return (
        <Main>
            <div className="flex md:bg-[#000000d6] w-full h-full min-h-[400px] md:min-h-[700px] max-w-[550px] md:shadow-2xl rounded-4xl shadow-[#ffffff23] m-auto flex-col justify-center items-center md:py-10 ">
                <div className="flex py-2 w-full items-center flex-col gap-4 ">
                    <User color="white" className="border-1 p-2 rounded-[15px]" size={50} strokeWidth={1} />
                    <h2 className="text-white text-5xl w-full font-semibold text-center">Inicia sesión</h2>
                    <p className="text-[#ffffff69] max-w-80 text-center">Por favor, ingresá los datos a continuacion para iniciar sesión.</p>
                </div>
                <div className="flex text-white flex-col rounded-2xl items-center  w-full max-w-[800px] gap-15">
                    <h2 className="text-6xl font-semibold "></h2>

                    <form onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col  max-w-96 w-full gap-6">


                        <div className="flex flex-col gap-3">

                            <label
                                htmlFor="email"
                                className={`font-medium ${errors.email ? 'text-red-900' : 'text-[#ffffffd4]'}`}>Email *
                            </label>

                            <input
                                id="email"
                                className={`border-1 bg-black  p-3 rounded-[7px] outline-0 ${errors.email ? ' border-red-500' : 'border-[#ffffff7c]'} `}
                                type="email"
                                placeholder="Ingresá tu direccion de email"
                                {...register("email",
                                    {
                                        required: messages.req,
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: messages.email
                                        }
                                    }

                                )} />
                            {errors.email && <p className="text-red-700 text-[15px]">{errors.email.message?.toString()}</p>}

                        </div>

                        <div className="flex flex-col gap-2 relative">

                            <label
                                htmlFor="password"
                                className={`font-medium ${errors.password ? 'text-red-900' : 'text-[#ffffffd4]'}`}>Contraseña *
                            </label>

                            <input
                                id="password"
                                className={`border-1  
                                p-3 rounded-[7px] bg-black outline-0 ${errors.password ? 'border-red-500' : 'border-[#ffffff7c]'}`}
                                type={hidden}
                                {...register("password",
                                    {
                                        required: messages.req,
                                        minLength: {
                                            value: 8,
                                            message: messages.password
                                        },
                                    }
                                )}
                                placeholder="Ingresá tu contraseña"
                            />
                            <div onClick={setToggleIcon} className="absolute bottom-0 right-4 top-12 cursor-pointer">
                                {hidden !== 'text' ? <EyeClosed size={20} /> : <Eye size={20} />}
                            </div>

                            {errors.password && <p className="text-red-700 text-[15px]">{errors.password.message?.toString()}</p>}

                        </div>

                        <Link to="/recovery" className="hover:underline text-end">¿Olvidaste tu contraseña?</Link>

                        <button className="bg-white cursor-pointer hover:bg-[#ffffffd1] text-black p-2 mt-5 rounded-[7px] font-medium" type="submit">Iniciar sesión</button>
                    </form>

                    <span className="text-[#ffffff77] text-center">¿Todavía no tenés una cuenta? <Link className="text-white font-medium hover:underline" to="/signUp"> Registrate acá</Link></span>

                </div>
            </div>

        </Main>
    )
}