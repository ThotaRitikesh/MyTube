import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: true,
};

export const appToggle = createSlice({
  name: "toggle_app",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closetoggle: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggle, closetoggle } = appToggle.actions;

export default appToggle.reducer;
