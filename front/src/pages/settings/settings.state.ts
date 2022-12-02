import { useEffect, useState } from "react";
import {
  CompanyRolesApiServices,
  EquipmentTypeApiServices,
} from "./settings.api";

export interface ISelectOption {
  name: string;
  id: string;
}

export const useSettingsState = () => {
  const [companyRole, setCompanyRole] = useState("");
  const [roleList, setRoleList] = useState<any>([]);
  const [selectedRoleId, setSelectedRoleId] = useState("");
  const [isDeleteRole, setIsDeleteRole] = useState<boolean>(true);

  const [equipType, setEquipType] = useState("");
  const [selectedEquipTypeId, setSelectedEquipTypeId] = useState("");
  const [equipList, setEquipList] = useState<any>([]);
  const [isDeleteEquip, setIsDeleteEquip] = useState<boolean>(true);

  useEffect(() => {
    loadRoles();
    loadEquip();
  }, []);

  const loadRoles = async () => {
    const { data } = await CompanyRolesApiServices.getAllCompanyRoles();
    setRoleList(data);
  };
  const loadEquip = async () => {
    const { data } = await EquipmentTypeApiServices.getAllEquipmentTypes();
    setEquipList(data);
  };

  const changeCompanyRole = (text: string) => {
    setCompanyRole(text);
  };
  const changeEquipType = (text: string) => {
    setEquipType(text);
  };

  const changeSelectedRole = (e: { value: string }) => {
    setSelectedRoleId(e.value);
    isDeleteRole && setIsDeleteRole(false);
  };
  const changeSelectedEquip = (e: { value: string }) => {
    setSelectedEquipTypeId(e.value);
    isDeleteEquip && setIsDeleteEquip(false);
  };

  const createNewRole = async () => {
    if (!companyRole || /^\s*$/.test(companyRole)) return;
    try {
      const { data } = await CompanyRolesApiServices.createCompanyRole({
        name: companyRole,
      });
      setRoleList([...roleList, data]);
      setCompanyRole("");
    } catch (e) {
      console.error(e);
    }
  };

  const createNewEquipType = async () => {
    if (!equipType || /^\s*$/.test(equipType)) return;
    try {
      const { data } = await EquipmentTypeApiServices.createEquipmentType({
        name: equipType,
      });
      setEquipList([...equipList, data]);
      setEquipType("");
    } catch (e) {
      console.error(e);
    }
  };
  const deleteRole = async () => {
    try {
      await CompanyRolesApiServices.deleteCompanyRole(selectedRoleId);
      await loadRoles();
      setIsDeleteRole(true);
    } catch (e) {
      console.error(e);
    }
  };
  const deleteEquipType = async () => {
    try {
      await EquipmentTypeApiServices.deleteEquipmentType(selectedEquipTypeId);
      await loadEquip();
      setIsDeleteEquip(true);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    companyRole,
    equipType,
    roleList,
    equipList,
    isDeleteRole,
    isDeleteEquip,
    changeSelectedRole,
    changeSelectedEquip,
    changeCompanyRole,
    changeEquipType,
    createNewRole,
    createNewEquipType,
    deleteRole,
    deleteEquipType,
  };
};
