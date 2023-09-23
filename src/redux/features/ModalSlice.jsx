import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileNav: false,
  snackBar: {
    open: false,
    message: "",
    severity: "success",
  },
};
const ModalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    toggleMobileNav: (state) => {
      state.mobileNav = !state.mobileNav;
    },
    toggleSnackBar: (state, action) => {
      state.snackBar.message = action.payload.message;
      state.snackBar.open = action.payload.open;
      state.snackBar.severity = action.payload.severity;
    },
  },
});

export const { toggleMobileNav, toggleSnackBar } = ModalSlice.actions;
export default ModalSlice.reducer;
