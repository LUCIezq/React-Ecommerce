import type { SubmitHandler } from "react-hook-form";
import type { DataLoginProps } from "./DataLoginProps";
import type { FormDataSignUp } from "./FormData";

export interface FormProps {
    onSubmit: SubmitHandler<FormDataSignUp>;
    data: DataLoginProps;
}