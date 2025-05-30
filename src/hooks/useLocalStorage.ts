import { useEffect, useState, type SetStateAction } from "react";

type ObjectType<T> = T | null;

interface Props<T> {
    object: ObjectType<T>;
    setObject: React.Dispatch<SetStateAction<ObjectType<T>>>
}

export function useLocalStorage<T>(name: string): Props<T> {

    const [object, setObject] = useState<ObjectType<T>>(() => {

        try {
            const usuarioStored = localStorage.getItem(name);
            return usuarioStored ? JSON.parse(usuarioStored) : null;
        } catch (error) {
            console.error('error al cargar el usuario', error)
            return null;
        }

    });

    useEffect(() => {
        try {
            localStorage.setItem(name, JSON.stringify(object))
        } catch (err) {
            console.error('error al setear el usuario', err)
        }
    }, [name, object]);

    return { object, setObject };
}