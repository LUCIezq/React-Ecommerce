import { Building2, MessageCircleIcon, Phone, Ticket, type LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent } from "react";


interface ContactData {
    id: number,
    title: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>,
    description: string,
    link: string
}

export const ContactData: ContactData[] = [
    {
        id: 1,
        title: "Chat en vivo",
        icon: MessageCircleIcon,
        description: "Charla con nuestro equipo de soporte en tiempo real.",
        link: "alguien@ejemplo.com"
    },
    {
        id: 2,
        title: "Enviar ticket de soporte",
        icon: Ticket,
        description: "Estamos disponibles para ayudarte con cualquier problema que tengas.",
        link: "alguien@soporte.com"
    },
    {
        id: 3,
        title: "Visita nuestras oficinas",
        icon: Building2,
        description: "Visita nuestras oficinas para asistencia personalizada.",
        link: "Calle Falsa 123, Ciudad, País"
    },
    {
        id: 4,
        title: "Llamados telefónicos",
        icon: Phone,
        description: "Puedes llamarnos para asistencia inmediata y consultas.",
        link: "+1 (555) 123-4567"
    },
]