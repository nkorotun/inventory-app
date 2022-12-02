import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { Aside } from "../../components/side-menu";
import { ROUTES } from "../../constants/routes";
import { CreateEquipmentPage } from "../create-equipment/create-equipment";
import { CreateUserPage } from "../create-user";
import { DashboardPage } from "../dashboard/dashboard";
import { EquipmentDetailsPage } from "../equipment-details";
import { EquipmentPage } from "../equipment/equipment";
import { PersonalPage } from "../personal";
import { ProfilePage } from "../profile/profile";
import { SettingsPage } from "../settings/settings";
import { TicketPage } from "../ticket/ticket";
import { UsersPage } from "../users/users";
import { MainStyles as Styled } from "./main.styles";

export const MainPage = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <Styled.Wrapper>
        <Aside />
        <Styled.Main>
          <Switch>
            <Route
              path={`${path}${ROUTES.dashboard}`}
              component={DashboardPage}
            />
            <Route
              path={`${path}${ROUTES.users}`}
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={UsersPage} exact />
                  <Switch>
                    <Route
                      path={`${url}/${ROUTES.create}`}
                      component={CreateUserPage}
                    />
                    <Route path={`${url}/:userId`} component={ProfilePage} />
                  </Switch>
                </>
              )}
            />
            <Route
              path={`${path}${ROUTES.equipment}`}
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={EquipmentPage} exact />
                  <Switch>
                    <Route
                      path={`${url}/${ROUTES.create}`}
                      component={CreateEquipmentPage}
                    />
                    <Route path={`${url}/:equipmentId`} component={EquipmentDetailsPage} />
                  </Switch>
                </>
              )}
            />
            <Route path={`${path}${ROUTES.tickets}`} component={TicketPage} />
            <Route
              path={`${path}${ROUTES.settings}`}
              component={SettingsPage}
            />
            <Route
              path={`${path}${ROUTES.personal}`}
              component={PersonalPage}
            />
            <Redirect exact from={path} to={`${path}${ROUTES.dashboard}`} />
          </Switch>
        </Styled.Main>
      </Styled.Wrapper>
      <Styled.Footer>
        <Styled.FooterText>© 2021 Codempire Inventory App</Styled.FooterText>
      </Styled.Footer>
    </>
  );
};
