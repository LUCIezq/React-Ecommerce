import type { DataLoginProps } from "@/types/DataLoginProps";
import { MessagesForm } from "@/utils/MessagesForm";


export const DataLogin: DataLoginProps = {
    button: 'Iniciar sesión',
    data: [
        {
            id: 'email',
            type: "email",
            name: 'email',
            placeholder: 'alguien@algo.com',
            label: 'Email',
            rules: {
                required: true,
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: MessagesForm.email
                }
            }
        },
        {
            id: 'password',
            name: 'password',
            type: 'password',
            placeholder: '********',
            label: 'Contraseña',
            rules: {
                required: true,
                minLength: {
                    value: 8,
                    message: MessagesForm.password
                }
            }
        }
    ]
}

export const DataSignUp: DataLoginProps = {

    button: 'Registrarse',
    data: [
        {
            id: 'name',
            type: "text",
            name: 'name',
            placeholder: '@alguien',
            label: 'Nombre',
            rules: {
                required: true,
                minLength: {
                    value: 4,
                    message: MessagesForm.name
                }
            }
        },
        {
            id: 'surname',
            type: "text",
            name: 'surname',
            placeholder: '@algo',
            label: 'Apellido',
            rules: {
                required: true,
                minLength: {
                    value: 3,
                    message: MessagesForm.apellido
                }
            }
        },

        // 
        {
            id: 'email',
            type: "email",
            name: 'email',
            placeholder: 'alguien@algo.com',
            label: 'Email',
            rules: {
                required: true,
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: MessagesForm.email
                }
            }
        },
        {
            id: 'password',
            name: 'password',
            type: 'password',
            placeholder: '********',
            label: 'Contraseña',
            rules: {
                required: true,
                minLength: {
                    value: 8,
                    message: MessagesForm.password
                }
            }
        },
        {
            id: 'confirmPassword',
            name: 'confirmPassword',
            type: 'password',
            placeholder: '********',
            label: 'Confirmar contraseña',
            rules: {
                required: true,
            }
        },
        {
            id: 'toggleAdmin',
            type: 'checkbox',
            name: 'toggleAdmin',
            label: '¿Queres ser administrador?',
            rules: {
                required: false
            },
            placeholder: ''
        }
    ]
}
