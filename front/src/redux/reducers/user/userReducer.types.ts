import { EUserRoles } from "../../../constants/roles";

export interface IUser {
  id: string;
  email: string;
  name: string;
  role: EUserRoles;
  company_role: {
    id: string;
    name: string;
  } | null;
  status: EStatus;
  date: Date;
  updated?: Date;
  equipmentIds?: string[];
}

export interface ILogin {
  user: IUser;
  userInfo: IUser;
  token: string;
  error: {
    message: string;
  };
  isLogin: boolean;
  isError: boolean;
  isCreated: boolean;
}

export enum EStatus {
  none = "",
  new = "New",
  employed = "Employed",
  dismissed = "Dismissed",
}
