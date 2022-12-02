import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { FONT_SIZES } from "../../constants/fontSizes";

export const HeaderStyles = {
  Header: styled.header`
    display: flex;
    align-items: center;
    background-color: ${COLORS.white};
    color: #333333;
    width: 100%;
    padding: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 0.1rem 0.25rem ${COLORS.grayDark};
  `,
  Wrapper: styled.div`
    flex: 1;
    display: flex;
    align-items: baseline;
    width: 100%;
  `,
  Title: styled.h1`
    margin: 0;
  `,
  Description: styled.span`
    margin: 0;
    margin-left: 1rem;
    font-size: ${FONT_SIZES.small};
  `,
  Button: styled.button`
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: 0.15rem solid ${COLORS.main};
    border-radius: 0.5rem;
    font-size: ${FONT_SIZES.medium};
    color: ${COLORS.grayDark};
    background-color: transparent;
    transition: 0.2s ease-in;
    &:hover {
      background-color: ${COLORS.main};
      color: ${COLORS.white};
      transition: 0.2s ease-in;
    }
  `,
};
