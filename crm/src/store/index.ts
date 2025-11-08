import { configureStore } from "@reduxjs/toolkit";
import authReducer, { AuthState } from "shared/store";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Store = typeof store;

export const selectAuth = (state: RootState): AuthState => state.auth;
