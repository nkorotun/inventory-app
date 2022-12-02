import { CSSProperties, FC } from "react";
import { ButtonStyles as Styled } from "./button.styles";

interface IButtonProps {
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  styles?: CSSProperties;
}

export const CustomButton: FC<IButtonProps> = ({
  label,
  onClick,
  type,
  disabled,
  styles,
}) => {
  return (
    <Styled.Button
      onClick={onClick}
      type={type || "button"}
      disabled={disabled}
      style={styles}
    >
      {label}
    </Styled.Button>
  );
};
