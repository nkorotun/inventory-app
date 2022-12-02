import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { FONT_SIZES } from "../../constants/fontSizes";

export const UsersStyles = {
  UserCardWrapper: styled.div`
    display: flex;
    align-items: stretch;
  `,

  UserCard: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    color: ${COLORS.grayDark};
    background-color: ${COLORS.grayLight};
    box-shadow: 0.1rem 0.1rem 0.5rem 0.1rem ${COLORS.grayDark};
    transition: 0.2s ease-in;
    &:hover {
      background-color: ${COLORS.grayDark}25;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      p {
        margin: 0;
        font-size: ${FONT_SIZES.medium};
        color: ${COLORS.black};
        & + p {
          margin-top: 0.5rem;
          font-size: ${FONT_SIZES.small};
          color: ${COLORS.grayDark}95;
        }
      }
      + div {
        margin-left: 2rem;
      }
    }
  `,
  ActionButton: styled.div`
    margin: 1rem 0.75rem;
    padding: 1rem;
    border-radius: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    font-weight: 600;
    background-color: ${COLORS.main}30;
    box-shadow: 0.1rem 0.1rem 0.5rem 0.1rem ${COLORS.grayDark};
    transition: 0.2s ease-in;
    &:hover {
      background-color: ${COLORS.main};
      svg {
        fill: ${COLORS.grayLight};
      }
    }
  `,
  CreateButton: styled.div`
    padding: 1rem;
    border-radius: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    background-color: #04910130;
    box-shadow: 0.1rem 0.1rem 0.5rem 0.1rem ${COLORS.grayDark};
    transition: 0.2s ease-in;
    &:hover {
      background-color: #049101;
      svg {
        fill: ${COLORS.grayLight};
      }
    }
  `,
};
