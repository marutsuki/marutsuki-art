import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import menuReducer from "./component/menu/menu.slice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
