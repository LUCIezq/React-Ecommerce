import { Form } from "@/components/Form";
import Main from "@/components/Main";
import { DataSignUp } from "@/data/FormData";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignUp() {

    return (
        <Main>
            <div className="flex md:bg-[#000000d6] w-full h-full min-h-[400px] md:min-h-[700px] max-w-[550px] gap-4 md:shadow-2xl rounded-4xl shadow-[#ffffff23] m-auto flex-col justify-center items-center pb-7  md:py-10 ">
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
                            className="text-white font-medium hover:underline"
                            to="/sign-in"
                        >
                            Inicia sesión
                        </Link>
                    </div>

                </div>

                <Form data={DataSignUp} onSubmit={() => console.log('registrado')} />
            </div>

        </Main>
    );
}
