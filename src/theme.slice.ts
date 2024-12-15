import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type State = {
  mode: "light" | "dark";
};
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light",
  } as State,
  reducers: {
    toggleMode: (state) => {
      if (state.mode === "light") {
        state.mode = "dark";
      } else {
        state.mode = "light";
      }
    },
  },
});

const baseSelector = (state: RootState) => state.theme;

export const selectTheme = createSelector(
  baseSelector,
  (theme) => theme.mode
);

export const { toggleMode } = themeSlice.actions;

export default themeSlice.reducer;
