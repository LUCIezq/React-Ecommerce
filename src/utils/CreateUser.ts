import type { User } from "@/types/User"
import type { FormDataSignUp } from "@/types/FormData";

export const CreateUser = (data: FormDataSignUp): User => {
    const user = {
        nombre: data.name.toLowerCase(),
        apellido: data.surname.toLowerCase(),
        email: data.email,
        password: data.password
    }
    return user;
}