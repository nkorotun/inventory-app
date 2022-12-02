import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EEquipmentStatus } from "./equipmentReducer.types";

export interface IEquipment {
  id: string;
  name: string;
  userId: string | null;
  distributor: string;
  description: string;
  type: {
    id: string;
    name: string;
  } | null;
  price: number;
  date: Date ;
  status: EEquipmentStatus;
  updated: Date;
}

interface IInitialState {
  equipment: IEquipment[];
  isError: boolean;
  errorMessage: {
    message: string;
  };

}

export const initialEquipmentState: IInitialState = {
  equipment: [],
  isError: false,
  errorMessage: {
    message: "",
  },
};

export const equipmentSlice = createSlice({
  name: "equipment",
  initialState: initialEquipmentState,
  reducers: {
    getEquipments: (
      state: IInitialState,
      action: PayloadAction<IEquipment[]>
    ) => {
      state.equipment = action.payload;
    },
    addEquipments: (
      state: IInitialState,
      action: PayloadAction<IEquipment>
    ) => {
      state.equipment = [...state.equipment, action.payload];
    },
    editEquipments: (
      state: IInitialState,
      action: PayloadAction<IEquipment>
    ) => {
      state.equipment = state.equipment.map((equipment) =>
        equipment.id === action.payload.id ? action.payload : equipment
      );
    },
    deleteEquipments: (state: IInitialState, action: PayloadAction<string>) => {
      state.equipment = state.equipment.filter(
        (equipment) => equipment.id !== action.payload
      );
    },
    catchEquipmentErrors: (
      state,
      action: PayloadAction<{ message: string }>
    ) => {
      state.errorMessage.message = action.payload.message;
      state.isError = true;
    },
    clearUser: (
      state: IInitialState,
      action: PayloadAction<{ equipmentId: string }>
    ) => {
      state.equipment = state.equipment.map((equipment) =>
        equipment.id === action.payload.equipmentId
          ? { ...equipment, user: null }
          : equipment
      );
    },
    updateUserInEquipment: (
      state: IInitialState,
      action: PayloadAction<{ equipment: IEquipment[] }>
    ) => {
      state.equipment = action.payload.equipment;
    },

    deleteUserInEquipment: (
      state: IInitialState,
      action: PayloadAction<{ equipment: IEquipment[] | undefined }>
    ) => {
      state.equipment = state.equipment.map((equipment) => {
        if (
          action.payload.equipment?.some((item) => item.id === equipment.id)
        ) {
          return { ...equipment, user: null };
        }
        return equipment;
      });
    },
    addUserInEquip: (
      state: IInitialState,
      action: PayloadAction<{ equipment: IEquipment[] }>
    ) => {
      state.equipment = action.payload.equipment;
    },
    closePopupEquipment: (state) => {
      state.isError = false;
      state.errorMessage.message = "";
    },
  },
});

export const {
  getEquipments,
  addEquipments,
  editEquipments,
  deleteEquipments,
  clearUser,
  updateUserInEquipment,
  catchEquipmentErrors,
  deleteUserInEquipment,
  closePopupEquipment,
  addUserInEquip
} = equipmentSlice.actions;
export default equipmentSlice.reducer;
