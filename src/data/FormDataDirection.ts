import type { DataProps } from "@/types/DataProps";

export const DataDirection: DataProps[] = [

    {
        id: 'domicilio',
        type: 'text',
        name: 'domicilio',
        placeholder: 'Avenida Roca',
        label: 'Domicilio',
        rules: {
            required: true,
        }
    },
    {
        id: 'numero',
        type: 'text',
        name: 'numero',
        placeholder: '1234',
        label: 'Numero',
        rules: {
            required: true,
        }
    },
    {
        id: 'provincia',
        type: 'text',
        name: 'provincia',
        placeholder: 'Buenos Aires',
        label: 'Provincia',
        rules: {
            required: true,
        }
    },
    {
        id: 'ciudad',
        type: 'text',
        name: 'ciudad',
        placeholder: 'Laferrere',
        label: 'Ciudad',
        rules: {
            required: true,
        }
    }
]
