import { useEffect, useState } from "react";

type DataType<T> = T | null;

type ErrorType = Error | null;

//Los genericos me permiten trabajar con cualquier tipo de dato
interface Props<T> {
    data: DataType<T>;
    loading: boolean;
    error: ErrorType;
    setData: React.Dispatch<React.SetStateAction<DataType<T>>>;
}

export function useFetch<T>(url: string): Props<T> {

    const [data, setData] = useState<DataType<T>>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ErrorType>(null);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Error al obtener los datos.');
                }

                const jsonResponse: T = await response.json();
                setData(jsonResponse);
                setError(null);

            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url])

    return { data, loading, error, setData };
}