import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../user";

interface IInitialState {
  allUsers: IUser[];
}

const initialState: IInitialState = {
  allUsers: [],
};

export const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    getUsers: (state: any, action: PayloadAction<IUser[]>) => {
      state.allUsers = action.payload;
    },
    addUser: (state: any, action: PayloadAction<IUser>) => {
      state.allUsers = [...state.allUsers, action.payload];
      state.isCreated = true;
    },
    editUser: (state: IInitialState, action: PayloadAction<IUser>) => {
      state.allUsers = state.allUsers.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
    deleteUsers: (state: IInitialState, action: PayloadAction<string>) => {
      state.allUsers = state.allUsers.filter(
        (user) => user.id !== action.payload
      );
    },
  },
});

export const { getUsers, deleteUsers, addUser, editUser } =
  userListSlice.actions;

export default userListSlice.reducer;
