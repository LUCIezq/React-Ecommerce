import Main from "@/components/Main";
import { Link, useNavigate } from "react-router-dom";
import { type SubmitHandler } from 'react-hook-form'
import { useContext } from "react";
import { User } from 'lucide-react';
import { UserContext } from "@/contexts/user/UserContext";
import type { FormData } from "@/types/FormData";
import { Form } from "@/components/Form";
import { DataLogin } from "@/data/FormData";
import { UsuariosContext } from "@/contexts/users/UsuariosContext";
import { toast } from "sonner";

export default function SignIn() {

    const { setUsuario } = useContext(UserContext);
    const navigate = useNavigate();


    const { usuarios } = useContext(UsuariosContext);

    const handleLoguear: SubmitHandler<FormData> = ((data) => {

        const userExist = usuarios.find((usuario) => usuario.email === data.email);

        if (userExist) {
            if (userExist.password === data.password) {
                setUsuario(userExist);
                navigate(`/`);
            } else {
                toast.error('La contraseña que has introducido es incorrecta');
            }
        } else {
            toast.error('El correo electrónico que has introducido no está conectado a una cuenta');
        }
    })

    return (
        <Main>
            <div className="flex w-full h-full md:min-h-[700px] m-auto flex-col justify-center items-center pb-7 gap-12 md:py-10 ">

                <div className="flex w-full items-center flex-col gap-4 ">
                    <User color="white" className="border-1 p-2 rounded-[15px]" size={50} strokeWidth={1} />
                    <h2 className="text-white text-4xl w-full font-semibold text-center">Inicia sesión</h2>
                    <div className="flex gap-2">
                        <span className="text-[#ffffff77] text-center">¿Todavía no tenés una cuenta?</span>
                        <Link className="text-white font-medium underline underline-offset-2" to="/sign-up"> Registrate acá</Link>
                    </div>
                </div>

                <Form onSubmit={handleLoguear} data={DataLogin} />

            </div>
        </Main>
    )
}