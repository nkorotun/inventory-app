import { IUser } from '../../redux/reducers/user';
import { deleteData, fetchData, postData, changeData } from "../../service/api";
import { USER_ROUTES } from "./users.const";

export const UsersApiServices = {
  async getAllUsers(token?:string) {
    return await fetchData(`${USER_ROUTES.user}/${USER_ROUTES.getAll}`,{},token);
  },
  async deleteUser(id: string) {
    return await deleteData(`${USER_ROUTES.user}/${id}`, {});
  },
  async createUser(data: {}) {
    return await postData(`${USER_ROUTES.user}/${USER_ROUTES.create}`, data);
  },
  async getUserById(id: string) {
    return await fetchData(`${USER_ROUTES.user}/${id}`);
  },
  async editUser(data: IUser & { equipmentIds: string[] | undefined } | any) {
    return await changeData(`${USER_ROUTES.user}/${data.id}`, data);
  },
};
