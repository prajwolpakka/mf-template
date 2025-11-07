declare module "shared/store" {
  import type { AnyAction } from "@reduxjs/toolkit";

  export type AuthUser = {
    name: string;
    email: string;
  };

  export type AuthState = {
    user: AuthUser | null;
    token: string | null;
    lastLoginAt: string | null;
  };

  export const loginSuccess: (payload: { user: AuthUser; token: string }) => AnyAction;
  export const logout: () => AnyAction;
  export const selectAuth: (state: { auth: AuthState }) => AuthState;
  const authReducer: (state: AuthState | undefined, action: AnyAction) => AuthState;
  export default authReducer;
}
