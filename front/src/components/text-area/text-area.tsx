import { ChangeEventHandler, FocusEventHandler, FC } from "react";
import { StyledProps } from "styled-components";
import { TextAreaStyles as Styled } from "./text-area.styles";

interface IInputProps {
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  id: string;
  name?: string;
  value: string | number;
  styles?: StyledProps<any>;
}

export const TextArea: FC<IInputProps> = ({
  placeholder,
  onChange,
  onBlur,
  id,
  name,
  value,
  styles,
}) => {
  return (
    <Styled.TextArea style={styles}>
      <textarea
        id={id}
        name={name}
        placeholder=""
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span>{placeholder}</span>
    </Styled.TextArea>
  );
};
