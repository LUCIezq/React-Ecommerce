import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import type { UseFormSetValue } from "react-hook-form";

type FormularioProducto = {
    nombre: string;
    precio: number;
    descripcion: string;
    categoria: string;
};

type CategoryProps = {
    setValue: UseFormSetValue<FormularioProducto>;
    value?: string;
};

export default function Category({ setValue, value }: CategoryProps) {
    return (
        <Select
            onValueChange={(val) => setValue("categoria", val)}
            defaultValue={value}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="calzado">Calzado</SelectItem>
                <SelectItem value="tecnologia">Tecnología</SelectItem>
                <SelectItem value="ropa">Ropa</SelectItem>
                <SelectItem value="electrodomesticos">Electrodomésticos</SelectItem>
                <SelectItem value="muebles">Muebles</SelectItem>
                <SelectItem value="accesorios">Accesorios</SelectItem>
                <SelectItem value="hogar">Hogar</SelectItem>
                <SelectItem value="cocina">Cocina</SelectItem>
                <SelectItem value="perfumeria">Perfumería</SelectItem>
                <SelectItem value="belleza">Belleza</SelectItem>
                <SelectItem value="libros">Libros</SelectItem>
            </SelectContent>
        </Select>
    );
}
