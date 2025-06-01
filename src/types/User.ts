import type { ApiData } from "./ApiData";

export interface User {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    cart: ApiData[];
}