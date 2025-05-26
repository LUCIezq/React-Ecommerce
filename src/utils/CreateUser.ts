import type { User } from "@/types/User"
import type { FormData } from "@/types/FormData";

export const CreateUser = (data:FormData):User =>{
    const user = {
        nombre:'Ezequiel',
        apellido:'Luci',
        email:data.email,
        password:data.password
    }
    return user;
}