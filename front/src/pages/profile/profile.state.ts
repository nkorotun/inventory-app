import { useState } from "react";
import { useLocation } from "react-router";
import { IUser } from "../../redux/reducers/user";

export interface IProfile {
  user: IUser;
  editMode?: boolean;
}
export const useProfileState = () => {
  const { state }: any = useLocation();
  const { user, editMode }: IProfile = state;

  const [isEdit, setIsEdit] = useState(editMode || false);

  const changeEditMode = () => {
    setIsEdit(!isEdit);
  };
  return { user, isEdit, changeEditMode };
};
