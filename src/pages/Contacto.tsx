import Main from "@/components/Main";
import Title from "@/components/Title";
import { Building2, MessageCircleIcon, Phone, Ticket } from "lucide-react";

export default function Contacto() {
    return (
        <Main>
            <Title text="Contacto" />
            <div className="flex flex-col items-center justify-center gap-10 p-10 ">
                <div className="text-white bg-black  w-full max-w-[1200px] flex gap-40 p-8 justify-center rounded-3xl shadow-2xl shadow-[#ffffff12]">
                    <div className="flex flex-col justify-center items-start gap-4">
                        <span className="border-1 border-[#ffffff63] p-2 rounded-md text-[12px]">
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
                    <div className="grid grid-cols-2 gap-6">
                        <div className="border-1 border-[#ffffff63] p-3 rounded-2xl shadow-2xl shadow-[#00000019]" >
                            <div className=" flex flex-col gap-4">
                                <MessageCircleIcon size={20} />
                                <div>
                                    <p className="text-[20px] font-bold">
                                        Chat en vivo
                                    </p>
                                    <span className="text-[14px] text-[#ffffff89]">
                                        Charla con nuestro equipo de soporte en tiempo real.
                                    </span>
                                </div>

                                <span className="text-blue-500 text-[14px]">
                                    alguien@ejemplo.com
                                </span>
                            </div>
                        </div>
                        <div className="border-1 border-[#ffffff63] p-3 rounded-2xl shadow-2xl shadow-[#00000019]" >
                            <div className=" flex flex-col gap-4">
                                <Ticket size={20} />
                                <div>
                                    <p className="text-[20px] font-bold">
                                        Enviar ticket de soporte
                                    </p>
                                    <span className="text-[14px] text-[#ffffff89]">
                                        Estamos disponibles para ayudarte con cualquier problema que tengas.
                                    </span>
                                </div>

                                <span className="text-blue-500 text-[14px]">
                                    alguien@soporte.com
                                </span>
                            </div>
                        </div>
                        <div className="border-1 border-[#ffffff63] p-3 rounded-2xl shadow-2xl shadow-[#00000019]" >
                            <div className=" flex flex-col gap-4">
                                <Building2 size={20} />
                                <div>
                                    <p className="text-[20px] font-bold">
                                        Visita nuestras oficinas
                                    </p>
                                    <span className="text-[14px] text-[#ffffff89]">
                                        Visita nuestras oficinas para asistencia personalizada.
                                    </span>
                                </div>

                                <span className="text-blue-500 text-[14px]">
                                    Calle Falsa 123, Ciudad, País
                                </span>
                            </div>
                        </div>
                        <div className="border-1 border-[#ffffff63] p-3 rounded-2xl shadow-2xl shadow-[#00000019]" >
                            <div className=" flex flex-col gap-4">
                                <Phone size={20} />
                                <div>
                                    <p className="text-[20px] font-bold">
                                        Llamados telefónicos
                                    </p>
                                    <span className="text-[14px] text-[#ffffff89]">
                                        Puedes llamarnos para asistencia inmediata y consultas.
                                    </span>
                                </div>

                                <span className="text-blue-500 text-[14px]">
                                    +1 (555) 123-4567
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </Main>
    )
}