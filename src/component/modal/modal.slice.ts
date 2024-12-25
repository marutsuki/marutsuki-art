import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type State =
  | {
      active: false;
    }
  | {
      active: true;
      /** URL to the artwork to display. */
      contentUrl: string;
    };

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    active: false,
  } as State,
  reducers: {
    closeModal: (): State => ({
      active: false,
    }),
    openModal: (_, action: PayloadAction<string>): State => ({
      active: true,
      contentUrl: action.payload,
    }),
  },
});

const baseSelector = (state: RootState) => state.modal;
export const selectModalContent = createSelector(baseSelector, (modal) =>
  modal.active ? modal.contentUrl : null
);

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
