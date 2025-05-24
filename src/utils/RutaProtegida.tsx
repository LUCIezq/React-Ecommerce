import type { JSX } from "react"
import { Navigate } from "react-router-dom";

interface RutaProtegidaProps {
    children: JSX.Element
}

export const RutaProtegida = ({ children }: RutaProtegidaProps) => {

    const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');

    return usuario != null ? children : <Navigate to={'/sign-in'} />;
}