import { configureStore } from "@reduxjs/toolkit";
import authReducer from "shared/store";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export type Store = typeof store;
