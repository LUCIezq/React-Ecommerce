import type { RegisterOptions } from "react-hook-form";

export interface InputProps {
    id: string;
    name: string;
    type: 'text' | 'email' | 'password' | 'checkbox';
    placeholder?: string;
    rules?: RegisterOptions
}