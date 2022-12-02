import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { userReducer, usersListReducer, equipmentReducer, ticketReducer } from "./reducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { compose } from "redux";

const persistConfig = {
  key: "authType",
  storage: storage,
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers({
  user: userReducer,
  userList: usersListReducer,
  equipment: equipmentReducer,
  tickets: ticketReducer,
});

const pReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: pReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: true,
  enhancers: composeEnhancers,
});
const persistOr = persistStore(store);
export { persistOr, store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
