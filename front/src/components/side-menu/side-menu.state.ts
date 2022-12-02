import { useHistory, useRouteMatch } from "react-router";
import { EUserRoles } from "../../constants/roles";
import { ROUTES } from "../../constants/routes";
import { useAppSelector } from "../../redux/store";

export const useAsideState = () => {
  const user = useAppSelector((state) => state.user.userInfo);
  let { url } = useRouteMatch();
  const { push } = useHistory();

  const pages = [
    {
      title: "Dashboard",
      route: `${url}${ROUTES.dashboard}`,
      requiredRoles: null,
    },
    {
      title: "Users",
      route: `${url}${ROUTES.users}`,
      requiredRoles: [EUserRoles.admin, EUserRoles.manager],
    },
    {
      title: "Equipment",
      route: `${url}${ROUTES.equipment}`,
      requiredRoles: [EUserRoles.admin, EUserRoles.manager],
    },
    {
      title: "Tickets",
      route: `${url}${ROUTES.tickets}`,
      requiredRoles: [EUserRoles.admin, EUserRoles.manager],
    },
    {
      title: "Settings",
      route: `${url}${ROUTES.settings}`,
      requiredRoles: null,
    },
  ];

  const goPersonalPage = () => {
    push(`${url}${ROUTES.personal}`);
  };

  const goToPage = (route: string) => () => {
    push(route);
  };

  return { pages, user, goPersonalPage, goToPage };
};
