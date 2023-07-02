import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

const filerSlice = createSlice({
  name: "filterText",
  initialState,
  reducers: {
    searchFilter: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { searchFilter } = filerSlice.actions;

export default filerSlice.reducer;
