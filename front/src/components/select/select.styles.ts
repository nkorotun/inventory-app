import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const SelectStyles = {
  Label: styled.span`
    color: ${COLORS.main};
    left: 6px;
    font-size: 14px;
    position: absolute;
    top: 2px;
    padding: 0.25rem 0.5rem;
    z-index: 1;
    background: ${COLORS.white};
  `,
  Container: styled.div`
    width: 100%;
    margin: 0.25rem 0;
    position: relative;
    padding-top: ${props => props.placeholder ? "1rem" : "0"};

    & > div > div:nth-child(4) {
      z-index: 2;
    }
  `,
};
