export interface FormData{
    email: string;
    password: string
}

export interface FormDataSignUp extends FormData {
    name: string;
    confirmPassword: string;
}