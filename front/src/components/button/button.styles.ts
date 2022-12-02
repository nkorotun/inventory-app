import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { FONT_SIZES } from "../../constants/fontSizes";

export const ButtonStyles = {
  Button: styled.button`
    color: ${props => props.disabled ? COLORS.gray : COLORS.black};
    font-size: ${FONT_SIZES.medium};
    border: 0.15rem solid ${COLORS.main};
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: transparent;
    transition: 0.2s ease-in;
    border-color: ${props => props.disabled ? COLORS.gray : COLORS.main};
    &:hover {
      background-color: ${props => props.disabled ? "transparent" : COLORS.main};
      color: ${props => props.disabled ? COLORS.gray : COLORS.white};
      transition: 0.2s ease-in;
    }
  `,
};
