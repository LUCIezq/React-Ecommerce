import Main from "@/components/Main";
import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useContext } from "react";
import { User } from 'lucide-react';
import { UserContext } from "@/contexts/user/UserContext";
import type { FormData } from "@/types/FormData";
import { CreateUser } from "@/utils/createUser";
import { Form } from "@/components/Form";


export default function SignIn() {

    const { setUsuario } = useContext(UserContext);
    const navigate = useNavigate();

    const { reset
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = ((data) => {
        const user = CreateUser(data);
        setUsuario(user);
        reset();
        navigate(`/`)
    })

    return (
        <Main>
            <div className="flex md:bg-[#000000d6] w-full h-full min-h-[400px] md:min-h-[700px] max-w-[550px] gap-4 md:shadow-2xl rounded-4xl shadow-[#ffffff23] m-auto flex-col justify-center items-center pb-7  md:py-10 ">

                <div className="flex w-full items-center flex-col gap-4 ">
                    <User color="white" className="border-1 p-2 rounded-[15px]" size={50} strokeWidth={1} />
                    <h2 className="text-white text-4xl w-full font-semibold text-center">Inicia sesión</h2>
                    <p className="text-[#ffffff69] max-w-80 text-center">Por favor, ingresá los datos a continuacion para iniciar sesión.</p>
                </div>

                <div className="flex text-white flex-col rounded-2xl items-center w-full max-w-[800px] gap-10">
                    <Form onSubmit={onSubmit} />
                    <span className="text-[#ffffff77] text-center">¿Todavía no tenés una cuenta? <Link className="text-white font-medium" to="/signUp"> Registrate acá</Link></span>
                </div>

            </div>
        </Main>
    )
}