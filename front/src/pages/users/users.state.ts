import { useEffect } from "react";
import { UsersApiServices } from "./users.api";
import { IUser } from "../../redux/reducers/user";
import { useAppSelector } from "../../redux/store";
import { useHistory, useRouteMatch } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useDispatch } from "react-redux";
import { deleteUsers, getUsers } from "../../redux/reducers/user-list";

export const useUsersState = () => {
  const { allUsers } = useAppSelector((state) => state.userList);
  const { role, id } = useAppSelector((state) => state.user.userInfo);
  const { path } = useRouteMatch();
  const { push } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await UsersApiServices.getAllUsers();
        dispatch(getUsers(data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, [dispatch]);

  const goProfile =
    (user: IUser, editMode = false) =>
    () => {
      push({ pathname: `${path}${user.id}`, state: { user, editMode } });
    };

  const createUser = () => {
    push(`${path}${ROUTES.create}`);
  };

  const deleteUser = (id: string) => async () => {
    try {
      const { data } = await UsersApiServices.deleteUser(id);
      data && dispatch(deleteUsers(id));
    } catch (error) {
      console.error(error);
    }
  };

  return {
    allUsers,
    role,
    id,
    createUser,
    goProfile,
    deleteUser,
  };
};
