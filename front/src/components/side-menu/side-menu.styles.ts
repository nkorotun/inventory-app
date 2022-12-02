import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { FONT_SIZES } from "../../constants/fontSizes";
import { Icons } from "../../constants/icons";

export const AsideStyles = {
  Aside: styled.aside`
    background-color: #333333;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Nav: styled.nav`
    flex: 1;
    max-width: 100%;
  `,
  Menu: styled.ul`
    list-style-type: none;
    padding: 0;
    font-size: ${FONT_SIZES.medium}};
  `,
  MenuItem: styled.li`
    border-radius: 0.75rem;
    padding: 0.3rem 0.75rem;
    margin: 0.25rem 0;
    user-select: none;
    cursor: pointer;
    font-size: ${FONT_SIZES.large};
    color: ${COLORS.grayLight};
    transition: 0.2s ease-in;
    &:hover {
      color: ${COLORS.grayDark};
      background-color: ${COLORS.grayLight};
    }
  `,
  User: styled.div`
    width: calc(100% - 1rem);
    display: flex;
    align-items: center;
    border-radius: 0.75rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    user-select: none;
    background-color: rgba(0, 0, 0, 0.2);
    transition: 0.2s ease-in;
    &:hover {
      background-color: ${COLORS.grayLight};
      color: ${COLORS.grayDark};
    }
    p {
      margin: 0 0 0 1rem;
      font-size: ${FONT_SIZES.medium};
    }
  `,
  Permission: styled.p`
    margin: 1rem 1rem 0.5rem;
    font-size: ${FONT_SIZES.small};
    text-align: center;
  `,
  LogoContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    span {
      font-size: ${FONT_SIZES.small};
    }
  `,
  Logo: styled(Icons.Box)`
    fill: ${COLORS.main};
    width: 3rem;
    height: 3rem;
  `,
};
