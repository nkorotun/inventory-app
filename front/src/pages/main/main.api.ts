import { IUser } from '../../redux/reducers/user';
import { IEquipment } from '../../redux/reducers/equipment';
import { deleteData, fetchData, postData, changeData } from "../../service/api";
import { MAIN_ROUTES } from "./main.consts";

export const MainApiServices = {
  async getAllUsers(token?:string) {
    return await fetchData(`${MAIN_ROUTES.user}/${MAIN_ROUTES.getAll}`,{},token);
  },
  async deleteUser(id: string) {
    return await deleteData(`${MAIN_ROUTES.user}/${id}`, {});
  },
  async createUser(data: {}) {
    return await postData(`${MAIN_ROUTES.user}/${MAIN_ROUTES.create}`, data);
  },
  async getUserById(id: string) {
    return await fetchData(`${MAIN_ROUTES.user}/${id}`);
  },
  async editUser(data: IUser & { equipmentIds: string[] | undefined } | any) {
    return await changeData(`${MAIN_ROUTES.user}/${data.id}`, data);
  },
  async getAllEquipments(token?:string) {
    return await fetchData(`${MAIN_ROUTES.equipment}/${MAIN_ROUTES.getAll}`,{},token);
  },
  async deleteEquipment(id: string) {
    return await deleteData(`${MAIN_ROUTES.equipment}/${id}`, {});
  },
  async createEquipment(data: {}) {
    return await postData(`${MAIN_ROUTES.equipment}/${MAIN_ROUTES.create}`, data);
  },
  async editEquipment(data: IEquipment) {
    return await changeData(`${MAIN_ROUTES.equipment}/${data.id}`, data);
  },
  async createTicket(data: {ticket:string,equipmentId:string ,user:string},) {
    return await postData(`${MAIN_ROUTES.ticket}/${MAIN_ROUTES.create}`, data);
  },
  async getAllTickets(token?:string){
    return await fetchData(`${MAIN_ROUTES.ticket}`,{},token) 
  },
  async deleteTicket(id:string){
    return await deleteData(`${MAIN_ROUTES.ticket}/${id}`,{})
  }
};
