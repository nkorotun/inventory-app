import { FC } from "react";
import { HeaderStyles as Styled } from "./header.styles";
import { useHeaderState } from "./header.state";

interface IHeaderProps {
  title: string;
  description?: string;
}

const Header: FC<IHeaderProps> = ({ title, description }) => {
  const { logOut } = useHeaderState();
  return (
    <Styled.Header>
      <Styled.Wrapper>
        <Styled.Title>{title}</Styled.Title>
        {description && <Styled.Description>{description}</Styled.Description>}
      </Styled.Wrapper>
      <Styled.Button onClick={logOut}>LogOut</Styled.Button>
    </Styled.Header>
  );
};
export default Header;
