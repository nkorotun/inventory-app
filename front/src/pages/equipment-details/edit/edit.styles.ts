import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const EditStyles = {
  Form: styled.form`
    margin-top: 16px;
  `,
  FormWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 30rem;
    margin: auto;
  `,
  InputBlock: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `,
  SelectWrapper: styled.div`
    width: 100%;
    margin: 0.25rem 0;
  `,
  InputWrapper: styled.div`
    width: 45%;
    flex: 1,
    justify-content: column;
  `,
  InputError: styled.div`
    min-height: 1.5rem;
    color: ${COLORS.red};
  `,
  BlockTittle: styled.h4`
    margin: 0.5rem 0 0.75rem;
  `,
  ButtonBlock: styled.div`
    display: flex;
    width: 100%;
    height: 2rem;
    justify-content: space-between;
    align-items: stretch;
    margin: 1rem;
  `,
  fullWidthProp: {
    width: "100%",
  },
};
