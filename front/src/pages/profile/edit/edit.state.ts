import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { EUserRoles } from "../../../constants/roles";
import { EStatus, IUser } from "../../../redux/reducers/user";
import { MainApiServices } from "../../main/main.api";
import { CompanyRolesApiServices } from "../../settings/settings.api";
import { permissionRoles } from "./edit.contants";

export const useEditState = (user: IUser) => {
  const { goBack } = useHistory();
  const [companyRoles, setCompanyRoles] = useState([]);
  const [selectedCompanyRole, setSelectedCompanyRole] = useState(
    user.company_role?.id
  );
  const [selectedPermissionRole, setSelectedPermissionRole] = useState(
    user.role
  );
  const [selectedStatus, setSelectedStatus] = useState(user.status);

  const permissionOptions = permissionRoles.map((role: string) => {
    return { label: role, value: role };
  });

  const defaultCompanyRole = user.company_role
  ? {
      label: user.company_role.name,
      value: user.company_role.id,
    }
  : null

  useEffect(() => {
    loadCompanyRoles();
  }, []);

  const loadCompanyRoles = async () => {
    const { data } = await CompanyRolesApiServices.getAllCompanyRoles();
    setCompanyRoles(data);
  };

  const changeCompanyRole = (companyRole: { value: string } | null) => {
    setSelectedCompanyRole(companyRole?.value);
  };
  const changePermissionRole = ({ value }: { value: EUserRoles }) => {
    setSelectedPermissionRole(value);
  };

  const changeStatus = ({ value }: { value: EStatus }) => {
    setSelectedStatus(value);
  };

  const editUser = async ({
    email,
    firstName,
    lastName,
  }: {
    email: string;
    firstName: string;
    lastName: string;
  }) => {
    const data = {
      id: user.id,
      name: `${firstName} ${lastName}`,
      email,
      role: selectedPermissionRole,
      company_role: selectedCompanyRole,
      status: selectedStatus,
    };
    try {
      await MainApiServices.editUser(data);
      goBack();
    } catch (err: any) {
      console.error(err.response.data.message);
    }
  };

  return {
    companyRoles,
    defaultCompanyRole,
    permissionOptions,
    changeCompanyRole,
    changePermissionRole,
    changeStatus,
    editUser
  }
};
