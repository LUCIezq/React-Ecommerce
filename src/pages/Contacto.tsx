import ContactContainer from "@/components/ContactContainer";
import Main from "@/components/Main";
import Title from "@/components/Title";

export default function Contacto() {
    return (
        <Main>
            <Title text="Contacto" />

            <div className="flex flex-col items-center justify-center gap-10 p-10">

                <div className="text-black dark:text-white bg-white dark:bg-black w-full 
                max-w-[1200px] flex gap-40 p-8 justify-center rounded-3xl shadow-2xl shadow-[#ffffff12] border-[#0000001f] border-1 dark:border-[#ffffff52]">
                    <div className="flex flex-col justify-center items-start gap-4">
                        <span className="border-1 border-[#00000031] dark:border-[#ffffff52] p-2 rounded-md text-[12px]">
                            ¿Como podes contactarnos?
                        </span>

                        <h2 className="text-4xl font-semibold">
                            Envianos un mensaje.
                        </h2>
                        <p className="flex flex-col gap-1 text-[14px]">
                            O podes escribirnos a nuestro correo electrónico
                            <span className="text-blue-500">
                                alguien@ejemplo.com
                            </span>
                        </p>
                    </div>

                    <ContactContainer />
                </div>
            </div>

        </Main>
    )
}