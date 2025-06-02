import { Form } from "@/components/Form";
import Main from "@/components/Main";
import { UsuariosContext } from "@/contexts/users/UsuariosContext";
import { DataSignUp } from "@/data/FormData";
import type { FormDataSignUp } from "@/types/FormData";
import { CreateUser } from "@/utils/CreateUser";
import { MessagesForm } from "@/utils/MessagesForm";
import { User } from "lucide-react";
import { useContext } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function SignUp() {

    const { usuarios, setUsuarios } = useContext(UsuariosContext);
    const navigate = useNavigate();
    const methods = useForm<FormDataSignUp>({
        mode: 'onChange'
    }); //obtenemos todos los metodos de react-hook-form para mandarlos al FormProvider y a todos sus componentes hijos.

    const handleRegistrar: SubmitHandler<FormDataSignUp> = (data) => {
        const userExist = usuarios?.some((usuario => usuario.email === data.email));

        if (!userExist) {

            setUsuarios((prevValue) => [...prevValue ?? [], CreateUser(data)]);

            toast.success('Registro existoso')
            navigate('/sign-in');
        } else {
            methods.setError('email', {
                type: 'manual',
                message: MessagesForm.emailExist
            });
        }
    }

    return (
        <Main>
            <div className="flex w-full m-auto flex-col justify-center items-center pb-7  md:py-10 ">
                <div className="flex w-full items-center flex-col gap-4 ">
                    <User
                        color="white"
                        className="border-1 p-2 rounded-[15px]"
                        size={50}
                        strokeWidth={1}
                    />
                    <h2 className="text-white text-4xl w-full font-semibold text-center">
                        Registrate
                    </h2>
                    <div className="flex gap-2 text-center">
                        <span className="text-[#ffffff77] text-center">
                            ¿Ya tenés una cuenta?
                        </span>
                        <Link
                            className="text-white font-medium underline underline-offset-2"
                            to="/sign-in"
                        >
                            Inicia sesión
                        </Link>
                    </div>

                </div>
                <Form data={DataSignUp} onSubmit={handleRegistrar} methods={methods} />
            </div>
        </Main>
    );
}
