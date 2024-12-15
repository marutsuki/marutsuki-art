import { createAsyncThunk } from "@reduxjs/toolkit";
import { Option, selectOption, toggleDirty } from "./menu.slice";

export const resetAndNavigate = createAsyncThunk<void, Option>(
  "/menu/reset",
  (option, { dispatch }) => {
    dispatch(selectOption(option));
    dispatch(toggleDirty());
  }
);
