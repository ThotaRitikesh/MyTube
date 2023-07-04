import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  text: "",
};

const videoInfo = createSlice({
  name: "details",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state.id = action.payload;
    },
    searchText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { addDetails, searchText } = videoInfo.actions;

export default videoInfo.reducer;
