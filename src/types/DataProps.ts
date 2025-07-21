import type { RegisterOptions } from "react-hook-form";

export type DataProps = {
    id: string;
    type: 'text' | 'email' | 'password' | 'checkbox';
    placeholder: string;
    name: string;
    label: string;
    rules?: RegisterOptions
}