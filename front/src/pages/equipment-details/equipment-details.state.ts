import { useState } from "react";
import { useLocation } from "react-router";
import { IEquipment } from "../../redux/reducers/equipment";

export interface IDetails {
    equipment: IEquipment;
    editMode?: boolean;
  }

export const useEquipmentDetailsState = () => {
  const { state }: any = useLocation();
  const { equipment, editMode }: IDetails = state;

  const [isEdit, setIsEdit] = useState(editMode || false);

  const changeEditMode = () => {
    setIsEdit(!isEdit);
  };
  return { equipment, isEdit, changeEditMode };
};
