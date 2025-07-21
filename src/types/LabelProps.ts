import type { RegisterOptions } from "react-hook-form";

export interface LabelProps {
    name: string;
    label: string;
    rules?: RegisterOptions;
}