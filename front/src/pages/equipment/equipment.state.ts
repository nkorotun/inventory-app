import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import { ROUTES } from "../../constants/routes";
import {
  deleteEquipments,
  getEquipments,
  IEquipment,
} from "../../redux/reducers/equipment";
import { useAppSelector } from "../../redux/store";
import { EquipmentApiServices } from "./equipment.api";

export const useEquipmentState = () => {
  const { equipment } = useAppSelector((state) => state.equipment);
  const { role } = useAppSelector((state) => state.user.userInfo);
  const { path } = useRouteMatch();
  const { push } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchEquipmentData = async () => {
      try {
        const { data } = await EquipmentApiServices.getAllEquipment();
        dispatch(getEquipments(data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchEquipmentData();
  }, [dispatch]);

  const goDetails =
    (equipment: IEquipment, editMode = false) =>
    () => {
      push({
        pathname: `${path}${equipment.id}`,
        state: { equipment, editMode },
      });
    };

  const createEquipment = () => {
    push(`${path}${ROUTES.create}`);
  };

  const deleteEquipment = (id: string) => async () => {
    try {
      const { data } = await EquipmentApiServices.deleteEquipment(id);
      data && dispatch(deleteEquipments(id));
    } catch (error) {
      console.error(error);
    }
  };

  return {
    equipment,
    role,
    createEquipment,
    goDetails,
    deleteEquipment,
  };
};
