import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EUserRoles } from "../../../constants/roles";
import { EStatus, ILogin, IUser } from "./userReducer.types";

interface IInitialState {
  userInfo: IUser;
  token: string;
  error: {
    message: string;
  };
  isLogin: boolean;
  isError: boolean;
  isCreated: boolean;
}

const initialState: IInitialState = {
  userInfo: {
    id: "",
    email: "",
    name: "",
    role: EUserRoles.none,
    company_role: null,
    status: EStatus.none,
    date: new Date(),
  },
  token: "",
  error: {
    message: "",
  },
  isLogin: false,
  isError: false,
  isCreated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<ILogin>) => {
      state.userInfo = action.payload.user;
      state.token = action.payload.token;
      state.error.message = "";
      state.isLogin = true;
    },
    catchErrors: (state, action: PayloadAction<string>) => {
      state.error.message = action.payload;
      state.isError = true;
    },
    reset: () => {
      return initialState;
    },
    closePopup: (state) => {
      state.isError = false;
      state.isCreated = false;
    },
  },
});

export const {
  loginUser,
  catchErrors,
  reset,
  closePopup,
} = userSlice.actions;

export default userSlice.reducer;
