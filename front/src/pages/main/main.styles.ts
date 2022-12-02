import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const MainStyles = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    margin: 0;
    height: 95vh;
  `,
  Main: styled.main`
    width: 100%;
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: ${COLORS.white};
    &::-webkit-scrollbar {
      width: 0.55rem;
      background-color: ${COLORS.grayLight};
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 0.25rem;
      background: ${COLORS.main};
    }
  `,
  Footer: styled.footer`
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.grayDark};
  `,
  FooterText: styled.p`
    margin: 0;
    text-align: center;
    font-size: 0.8rem;
    color: ${COLORS.gray};
  `,
};
