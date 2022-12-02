import styled from "styled-components";

export const SettingsStyles = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  InputWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
  `,
  SelectWrapper: styled.div`
    width: 100%;
  `,
  buttonStyles: { width: "10rem", marginLeft: "0.5rem" },
  inputStyles: { width: "100%" },
};
