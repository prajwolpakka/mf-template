import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AuthUser = {
  name: string;
  email: string;
};

export type AuthState = {
  user: AuthUser | null;
  token: string | null;
  lastLoginAt: string | null;
};

const AUTH_PRESETS: Record<string, AuthState> = {
  shell: {
    user: null,
    token: null,
    lastLoginAt: null,
  },
  development: {
    user: {
      name: "Dev User",
      email: "dev@example.com",
    },
    token: "dev-token",
    lastLoginAt: "2024-01-01T00:00:00.000Z",
  },
};

type LoginSuccessPayload = {
  user: AuthUser;
  token: string;
};

const seedEnabled = typeof import.meta !== "undefined" && import.meta.env?.VITE_AUTH_SEED?.toLowerCase() === "true";
const preset = seedEnabled ? AUTH_PRESETS.development : AUTH_PRESETS.shell;

const initialState: AuthState = {
  user: preset.user ? { ...preset.user } : null,
  token: preset.token,
  lastLoginAt: preset.lastLoginAt,
};

console.log(seedEnabled, preset);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<LoginSuccessPayload>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.lastLoginAt = new Date().toISOString();
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.lastLoginAt = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export const selectAuth = (state: { auth: AuthState }) => state.auth;

export default authSlice.reducer;
