import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";


const opacity = (disabled: boolean) => {
  return disabled ? 0.5 : 1;
};


const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={disabled} opacity={opacity(disabled)}>{title}</ButtonContainer>;
};

export default Button;
