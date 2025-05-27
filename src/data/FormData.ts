import type { DataLoginProps } from "@/types/DataLoginProps";
import { MessagesForm } from "@/utils/MessagesForm";

export const DataLogin:DataLoginProps[] = [
    {
        id: 'email',
        type: "email",
        name:'email',
        placeholder: 'Ingresa tu direccion de correo',
        label: 'Email',
        Rules:{
            required:MessagesForm.req,
            pattern:{
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: MessagesForm.email
            }
        }
    },
    {
        id: 'password',
        name:'password',
        type: 'password',
        placeholder: 'Ingresa tu contraseña',
        label: 'Contraseña',
        Rules:{
            required:MessagesForm.req,
            minLength:{
                value: 8,
                message: MessagesForm.password
            }
        }
    }
]