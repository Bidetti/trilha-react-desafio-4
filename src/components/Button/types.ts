import { type } from "os";

export interface IButtonProps {
    title: string;
    onClick?: () => void;
    disabled: any;
    type?: "button" | "submit" | "reset" | undefined;
}

export interface IButtonStyle {
    disabled: any;
    opacity: number;
}