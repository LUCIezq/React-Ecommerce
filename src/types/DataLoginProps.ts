import type { RegisterOptions } from "react-hook-form";

type DataProps = {
    id: string;
    type: 'text' | 'email' | 'password';
    placeholder: string;
    name: string;
    label: string;
    Rules?: RegisterOptions
}
export interface DataLoginProps {
    data: DataProps[];
    button?: string;
}