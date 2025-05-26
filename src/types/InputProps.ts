import type { RegisterOptions } from "react-hook-form";

export interface InputProps{
    id:string;
    name:string;
    type: 'text'|'email'|'password'
    placeholder?:string;
    rules?:RegisterOptions
}