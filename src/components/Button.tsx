import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    classname?: string
}

export const Button = ({ children, onClick, type = 'button', classname = '' }: Props) => {
    return (
        <button onClick={onClick} type={type} className={`${classname}`}>
            {children}
        </button>
    )
}