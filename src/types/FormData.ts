export interface FormData {
    email: string;
    password: string
}

export interface FormDataSignUp extends FormData {
    name: string;
    surname: string;
    confirmPassword: string;
    toggleAdmin: boolean;
}