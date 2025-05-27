import type { RegisterOptions } from "react-hook-form";

export interface DataLoginProps {
    id: string;
    type: 'text' | 'email' | 'password';
    placeholder: string;
    name:string;
    label: string;
    Rules?:RegisterOptions
}