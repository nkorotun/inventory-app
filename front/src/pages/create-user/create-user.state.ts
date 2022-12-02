import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { EUserRoles } from "../../constants/roles";
import { EStatus } from "../../redux/reducers/user";
import { MainApiServices } from "../main/main.api";
import { permissionRoles } from "../profile/edit/edit.contants";
import { CompanyRolesApiServices } from "../settings/settings.api";

export const useCreateUserState = () => {
  const { goBack } = useHistory();

  const [permissionLevel, setPermissionLevel] = useState(EUserRoles.user);
  const [isPermissionError, setIsPermissionError] = useState<boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState(EStatus.new);
  const [companyRoles, setCompanyRoles] = useState([]);
  const [selectedCompanyRole, setSelectedCompanyRole] = useState<string | null>(null);

  useEffect(() => {
    loadCompanyRoles();
  }, []);

  const loadCompanyRoles = async () => {
    const { data } = await CompanyRolesApiServices.getAllCompanyRoles();
    setCompanyRoles(data);
  };

  const permissionOptions = permissionRoles.map((role: string) => {
    return { label: role, value: role };
  });

  const changePermissionLevel = (
    permissionOption: { value: EUserRoles } | null
  ) => {
    permissionOption && setPermissionLevel(permissionOption.value);
    setIsPermissionError(false);
  };

  const changeStatus = ({ value }: { value: EStatus }) => {
    setSelectedStatus(value);
  };

  const changeCompanyRole = (companyRole: { value: string } | null) => {
    companyRole && setSelectedCompanyRole(companyRole.value);
  };

  const createUser = async ({
    email,
    password,
    firstName,
    lastName,
  }: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    if (!permissionLevel) {
      setIsPermissionError(true);
      return;
    }
    const data = {
      email,
      password,
      name: `${firstName} ${lastName}`,
      role: permissionLevel,
      company_role: selectedCompanyRole,
      status: selectedStatus,
    };
    try {
      await MainApiServices.createUser(data);
      goBack();
    } catch (err: any) {
      console.error(err.response.data.message);
    }
  };

  return {
    permissionLevel,
    permissionOptions,
    isPermissionError,
    selectedStatus,
    companyRoles,
    selectedCompanyRole,
    changePermissionLevel,
    createUser,
    changeStatus,
    changeCompanyRole,
  };
};
