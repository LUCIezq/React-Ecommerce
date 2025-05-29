import type { SubmitHandler, UseFormReturn } from "react-hook-form";
import type { DataLoginProps } from "./DataLoginProps";
import type { FormDataSignUp } from "./FormData";

export interface FormProps {
    onSubmit: SubmitHandler<FormDataSignUp>;
    data: DataLoginProps;
    //UseFormReturn: UseFormReturn<FormDataSignUp>; -> representa la forma que van a tener los datos del formulario, en este caso, FormDataSignUp.
    methods: UseFormReturn<FormDataSignUp>;
}