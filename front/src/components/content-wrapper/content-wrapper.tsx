import { FC } from "react";
import { ContentWrapperStyles as Styled } from "./content-wrapper.styles";
interface IContentWrapper {
  children: any;
}

export const ContentWrapper: FC<IContentWrapper> = ({ children }) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
