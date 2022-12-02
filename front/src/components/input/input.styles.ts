import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const InputStyles = {
  Input: styled.label`
    cursor: text;
    display: inline-flex;
    position: relative;
    font-size: 1rem;
    box-sizing: border-box;
    align-items: center;
    font-weight: 400;
    line-height: 1.1876em;
    padding: 0.75rem 0.5rem;
    letter-spacing: 0.00938em;
    border: 0.1rem solid ${COLORS.gray};
    border-radius: 0.25rem;
      span {
        position: absolute;
        left: 0;
        top: 0;
        padding: 0.25rem 0.5rem;
        margin: 0.5rem 0.25rem;
        white-space: nowrap;
        user-select: none;
        transform: translate(0, 0);
        transform-origin: 0 0;
        background: ${COLORS.white};
        transition: transform 120ms ease-in;
        color: ${COLORS.gray};
        line-height: 1.2;
      }
      input {
        box-sizing: border-box;
        border-radius: 0.25rem;
        outline: none;
        font: inherit;
        color: currentColor;
        width: 100%;
        border: 0;
        height: 1.1876em;
        margin: 0;
        padding: 0.25rem 0;
        min-width: 0;
        background: none;
        letter-spacing: inherit;
        animation-duration: 10ms;

        &:focus,
        &:not(:placeholder-shown) {
          & + span {
            transform: translate(0.25rem, -75%) scale(0.8);
            color: ${COLORS.main};
          }
        }
      }
      &:focus-within {
        border-color: ${COLORS.main};
      }
    }
  `,
};
