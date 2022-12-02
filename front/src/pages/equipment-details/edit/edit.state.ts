import { useEffect, useState } from "react";
import { IEquipment } from "../../../redux/reducers/equipment";
import { EEquipmentStatus } from "../../../redux/reducers/equipment/equipmentReducer.types";
import { equipmentStatus } from "../../create-equipment/create-equipment.const";
import { EquipmentApiServices } from "../../equipment/equipment.api";
import { EquipmentTypeApiServices } from "../../settings/settings.api";
import { ISelectOption } from "../../settings/settings.state";

export const useEditState = (equipment: IEquipment, close: () => void) => {
  const [equipmentTypes, setEquipmentTypes] = useState([]);
  const [selectedEquipmentType, setSelectedEquipmentType] = useState(
    equipment.type?.name
  );
  const [selectedStatus, setSelectedStatus] = useState<EEquipmentStatus>(
    EEquipmentStatus.stored
  );
  const statusOptions = equipmentStatus.map((el) => {
    return { label: el.charAt(0).toUpperCase() + el.slice(1), value: el };
  });

  useEffect(() => {
    loadEquipmentTypes();
  }, []);

  const loadEquipmentTypes = async () => {
    const { data } = await EquipmentTypeApiServices.getAllEquipmentTypes();
    setEquipmentTypes(
      data.map((el: ISelectOption) => {
        return { label: el.name, value: el.id };
      })
    );
  };

  const changeEquipmentType = (equipOption: { value: string } | null) => {
    equipOption && setSelectedEquipmentType(equipOption.value);
  };
  const changeStatus = (statusOption: { value: EEquipmentStatus } | null) => {
    statusOption && setSelectedStatus(statusOption.value);
  };

  const editEquipment = async ({
    name,
    description,
    price,
    distributor,
  }: {
    name: string;
    description: string;
    price: number;
    distributor: string;
  }) => {
    const data = {
      id: equipment.id,
      name,
      description,
      price,
      distributor,
      type: selectedEquipmentType,
      status: selectedStatus,
    };
    try {
      await EquipmentApiServices.editEquipment(data);
      close();
    } catch (err: any) {
      console.error(err.response.data.message);
    }
  };

  return {
    equipmentTypes,
    selectedEquipmentType,
    statusOptions,
    selectedStatus,
    changeEquipmentType,
    changeStatus,
    editEquipment,
  };
};
