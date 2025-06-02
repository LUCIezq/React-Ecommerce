import { useEffect, useState, type SetStateAction } from "react";

type ObjectType<T> = T;

interface Props<T> {
    object: ObjectType<T>;
    setObject: React.Dispatch<SetStateAction<ObjectType<T>>>
}

export function useLocalStorage<T>(name: string, defaultValue: T): Props<T> {

    const [object, setObject] = useState<ObjectType<T>>(() => {

        try {
            const stored = localStorage.getItem(name);
            return stored ? JSON.parse(stored) : defaultValue;
        } catch (error) {
            console.error('error al cargar el usuario', error)
            return defaultValue;
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