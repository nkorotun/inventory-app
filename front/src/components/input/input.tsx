import { ChangeEventHandler, FocusEventHandler, FC } from "react";
import { StyledProps } from "styled-components";
import { InputStyles as Styled } from "./input.styles";

interface IInputProps {
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  id: string;
  name?: string; 
  value: string | number;
  type?: string;
  multiline?: boolean;
  rows?: number;
  styles?: StyledProps<any>;
}

export const Input: FC<IInputProps> = ({
  placeholder,
  onChange,
  onBlur,
  id,
  name,
  value,
  type,
  styles
}) => {
  return (
      <Styled.Input style={styles}>
        <input
          id={id}
          name={name}
          type={type}
          placeholder=""
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span>{placeholder}</span>
      </Styled.Input>
  );
};
