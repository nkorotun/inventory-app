import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { FONT_SIZES } from "../../constants/fontSizes";

export const AuthWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 15px;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AuthHeader = styled.div`
  max-width: 25em;
  width: 100%;
  padding: 1rem;
  border-radius: 0.25rem;
  user-select: none;
  color: ${COLORS.grayLight};
  background-color: ${COLORS.main};
  box-shadow: 0 0.1rem 0.25rem 0 ${COLORS.grayDark}80;
`;

export const HeaderText = styled.p`
  margin: 0;
  text-align: center;
`;

export const AuthForm = styled.form`
  width: 100%;
  max-width: 25em;
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 30px -13px rgba(34, 60, 80, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  button {
    width: 100%;
    height: 50px;
  }

  div {
    width: 100%;
  }
`;

export const ErrorText = styled.div`
  box-sizing: border-box;
  height: 1rem;
  font-size: ${FONT_SIZES.small};
  text-align: left;
  color: ${COLORS.red};
  margin: 0.25rem 0.5rem 1rem;
  padding-left: 0.5rem;
  overflow: hidden;
`;
