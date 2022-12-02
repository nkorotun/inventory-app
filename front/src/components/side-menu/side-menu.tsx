import { useAsideState } from "./side-menu.state";
import { AsideStyles as Styled } from "./side-menu.styles";

export const Aside = () => {
  const { pages, user, goPersonalPage, goToPage } = useAsideState();

  return (
    <Styled.Aside>
      <Styled.LogoContainer>
        <Styled.Logo/>
        <span>Inventory</span>
      </Styled.LogoContainer>
      <Styled.Nav>
        <Styled.Menu>
          {pages.map((page) =>
            !page.requiredRoles || page.requiredRoles?.includes(user.role) ? (
              <Styled.MenuItem key={page.title} onClick={goToPage(page.route)}>
                <span>{page.title}</span>
              </Styled.MenuItem>
            ) : (
              <></>
            )
          )}
        </Styled.Menu>
      </Styled.Nav>
      <Styled.User onClick={goPersonalPage}>
        <span>+</span>
        <p>{user.name}</p>
      </Styled.User>
      <Styled.Permission>{user.role} permission</Styled.Permission>
    </Styled.Aside>
  );
};
