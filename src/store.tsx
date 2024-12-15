import { configureStore, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import menuReducer from "./component/menu/menu.slice";
import themeReducer from "./theme.slice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<
  AppDispatch & ThunkDispatch<RootState, unknown, UnknownAction>
>();

export default store;
