import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../utiles/appToggle";
import searchSlice from "./searchSlice";
import videoinfo from "./videoInfo";

export const store = configureStore({
  reducer: {
    toggle_app: toggleReducer,
    search: searchSlice,
    details: videoinfo,
  },
});
