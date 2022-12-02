import { IEquipment } from "../../redux/reducers/equipment";
import { changeData, deleteData, fetchData, postData } from "../../service/api";
import { EQUIPMENT_ROUTES } from "./equipment.const";

export const EquipmentApiServices = {
    async getAllEquipment(token?:string) {
      return await fetchData(`${EQUIPMENT_ROUTES.user}/${EQUIPMENT_ROUTES.getAll}`,{},token);
    },
    async deleteEquipment(id: string) {
      return await deleteData(`${EQUIPMENT_ROUTES.user}/${id}`, {});
    },
    async createEquipment(data: {}) {
      return await postData(`${EQUIPMENT_ROUTES.user}/${EQUIPMENT_ROUTES.create}`, data);
    },
    async getEquipmentById(id: string) {
      return await fetchData(`${EQUIPMENT_ROUTES.user}/${id}`);
    },
    async editEquipment(data: IEquipment & { equipmentIds: string[] | undefined } | any) {
      return await changeData(`${EQUIPMENT_ROUTES.user}/${data.id}`, data);
    },
  };
  