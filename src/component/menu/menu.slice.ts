import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type Option = "2024" | "2023" | "2022" | "2021" | "None";

type State = {
  activeOption: Option;
  dirty: boolean;
};

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    activeOption: "2024",
    dirty: true,
  } as State,
  reducers: {
    selectOption: (state, action: PayloadAction<Option>) => {
      state.activeOption = action.payload;
    },
    toggleDirty: (state) => {
      state.dirty = !state.dirty;
    },
  },
});

const baseSelector = (state: RootState) => state.menu;
export const selectActiveOption = createSelector(
  baseSelector,
  (menu) => menu.activeOption
);
export const selectDirtyFlag = createSelector(
  baseSelector,
  (menu) => menu.dirty
);
export const { selectOption, toggleDirty } = menuSlice.actions;
export default menuSlice.reducer;
