import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
  type PersistConfig,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer, { type AuthState } from "shared/store";

const authPersistConfig: PersistConfig<AuthState> = {
  key: "auth",
  storage,
  whitelist: ["user", "token", "lastLoginAt"],
};

const rootReducer = combineReducers({
  auth: persistReducer<AuthState>(authPersistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

if (typeof window !== "undefined") {
  // Expose the Redux store globally so remotes can inspect auth state for debugging/integration.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__SHELL_REDUX_STORE__ = store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
