import { EyeClosed } from 'lucide-react';
import { Eye } from 'lucide-react';
import { MessagesForm } from "@/utils/MessagesForm";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import type { FormData } from '@/types/FormData';
import { Label } from './Label';
import { Input } from './Input';

interface FormProps {
    onSubmit: SubmitHandler<FormData>
}

export const Form = ({ onSubmit }: FormProps) => {

    const methods = useForm<FormData>();

    const { formState: { errors } } = useForm<FormData>();

    const [hidden, setHidden] = useState<string>('password');

    const setToggleIcon = (): void => {
        setHidden(
            hidden === 'password' ? 'text' : 'password'
        )
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}
                className="flex flex-col max-w-96 w-full gap-6">

                <div className="flex flex-col gap-3 w-full">

                    <Label label='Email' name='email' />

                    <Input id='email' name='email' type='email' placeholder='Ingresa tu direccion de correo' rules={{
                        required: MessagesForm.req,
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: MessagesForm.email
                        }
                    }} />

                </div>

                <div className="flex flex-col gap-2 relative">

                    <Label name='password' label='Contraseña' />

                    <Input id='password' type='password' placeholder='Ingresa tu contraseña' name='password' rules={
                        {
                            required: MessagesForm.req,
                            minLength: {
                                value: 8,
                                message: MessagesForm.password
                            },
                        }
                    } />

                    <div onClick={setToggleIcon} className="absolute bottom-0 right-4 top-12 cursor-pointer">
                        {hidden !== 'text' ? <EyeClosed size={20} /> : <Eye size={20} />}
                    </div>

                    {errors.password && <p className="text-red-700 text-[15px]">{errors.password.message?.toString()}</p>}

                </div>

                <Link to="/recovery" className="text-end hover:underline">¿Olvidaste tu contraseña?</Link>

                <button className="bg-white cursor-pointer hover:bg-[#ffffffd1] text-black p-2 mt-5 rounded-[7px] font-medium" type="submit">Iniciar sesión</button>
            </form>
        </FormProvider>
    )
}