import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../store/reducers/appToggle";
import searchSlice from "./reducers/searchSlice";
import videoinfo from "./reducers/videoInfo";
import filterSlice from "./reducers/filterSlice";

export const store = configureStore({
  reducer: {
    toggle_app: toggleReducer,
    search: searchSlice,
    details: videoinfo,
    filterText:filterSlice,
  },
});
