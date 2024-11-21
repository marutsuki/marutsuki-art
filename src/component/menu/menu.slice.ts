import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type Option = "2024" | "2023" | "2022" | "2021";

type State = {
  activeOption: Option;
};

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    activeOption: "2024",
  } as State,
  reducers: {
    selectOption: (state, action: PayloadAction<Option>) => {
      state.activeOption = action.payload;
    },
  },
});

const baseSelector = (state: RootState) => state.menu;
export const selectActiveMenuOption = createSelector(
  baseSelector,
  (menu) => menu.activeOption
);
export const { selectOption } = menuSlice.actions;
export default menuSlice.reducer;
