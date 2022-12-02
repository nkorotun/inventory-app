import { changeData, deleteData, fetchData, postData } from "../../service/api";

export const SETTINGS_ROUTES = {
  companyRoles: "company-roles",
  equipmentTypes: "equipment-type",
  getAll: "get-all",
  create: "create",
  delete: "delete",
};

export const CompanyRolesApiServices = {
  async getAllCompanyRoles(token?: string) {
    return await fetchData(
      `${SETTINGS_ROUTES.companyRoles}/${SETTINGS_ROUTES.getAll}`,
      {},
      token
    );
  },
  async deleteCompanyRole(id: string) {
    return await deleteData(`${SETTINGS_ROUTES.companyRoles}/${id}`, {});
  },
  async createCompanyRole(data: {}) {
    return await postData(
      `${SETTINGS_ROUTES.companyRoles}/${SETTINGS_ROUTES.create}`,
      data
    );
  },
  async editCompanyRole(id: string, name: string) {
    return await changeData(`${SETTINGS_ROUTES.companyRoles}/${id}`, { name });
  },
};

export const EquipmentTypeApiServices = {
  async getAllEquipmentTypes(token?: string) {
    return await fetchData(
      `${SETTINGS_ROUTES.equipmentTypes}/${SETTINGS_ROUTES.getAll}`,
      {},
      token
    );
  },
  async deleteEquipmentType(id: string) {
    return await deleteData(`${SETTINGS_ROUTES.equipmentTypes}/${id}`, {});
  },
  async createEquipmentType(data: {}) {
    return await postData(
      `${SETTINGS_ROUTES.equipmentTypes}/${SETTINGS_ROUTES.create}`,
      data
    );
  },
  async editEquipmentType(id: string, name: string) {
    return await changeData(`${SETTINGS_ROUTES.equipmentTypes}/${id}`, { name });
  },
};