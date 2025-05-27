import Main from "@/components/Main";
import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useContext } from "react";
import { User } from 'lucide-react';
import { UserContext } from "@/contexts/user/UserContext";
import type { FormData } from "@/types/FormData";
import { Form } from "@/components/Form";
import { CreateUser } from "@/utils/CreateUser";
import { DataLogin } from "@/data/FormData";

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
            <div className="flex md:bg-[#000000d6] w-full h-full min-h-[400px] md:min-h-[700px] max-w-[550px] gap-7 md:shadow-2xl rounded-4xl shadow-[#ffffff23] m-auto flex-col justify-center items-center pb-7  md:py-10 ">

                <div className="flex w-full items-center flex-col gap-4 ">
                    <User color="white" className="border-1 p-2 rounded-[15px]" size={50} strokeWidth={1} />
                    <h2 className="text-white text-4xl w-full font-semibold text-center">Inicia sesión</h2>
                    <div className="flex gap-2">
                        <span className="text-[#ffffff77] text-center">¿Todavía no tenés una cuenta?</span>
                        <Link className="text-white font-medium" to="/sign-up"> Registrate acá</Link>
                    </div>
                </div>

                <Form onSubmit={onSubmit} data={DataLogin} />

            </div>
        </Main>
    )
}