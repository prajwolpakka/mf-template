declare module "crm/App" {
  const App: import("react").ComponentType;
  export default App;
}

declare module "kms/App" {
  const App: import("react").ComponentType;
  export default App;
}

declare module "shared/app-layout" {
  import type { LucideIcon } from "lucide-react";

  type ComponentType<P = unknown> = import("react").ComponentType<P>;
  type ReactNode = import("react").ReactNode;

  interface LayoutUser {
    name: string;
    email: string;
    avatar: string;
  }

  interface LayoutTeam {
    name: string;
    logo: LucideIcon;
    plan: string;
  }

  interface LayoutNavItem {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: { title: string; url: string; isActive?: boolean }[];
  }

  interface AppLayoutProps {
    user: LayoutUser;
    teams: LayoutTeam[];
    navMain: LayoutNavItem[];
    headerActions?: ReactNode;
    headerLeft?: ReactNode;
    insetClassName?: string;
    contentWrapperClassName?: string;
    contentClassName?: string;
    children?: ReactNode;
    sidebarProps?: Record<string, unknown>;
  }

  const AppLayout: ComponentType<AppLayoutProps>;
  export default AppLayout;
}

declare module "shell/store" {
  import type { Persistor } from "redux-persist";
  import type { EnhancedStore } from "@reduxjs/toolkit";
  import type { AuthState } from "shared/store";

  export type RootState = {
    auth: AuthState;
  };

  export type AppDispatch = EnhancedStore<RootState>["dispatch"];

  export const store: EnhancedStore<RootState>;
  export const persistor: Persistor;
}

declare module "shell/hooks" {
  import type { TypedUseSelectorHook } from "react-redux";
  import type { AppDispatch, RootState } from "shell/store";

  export const useAppDispatch: () => AppDispatch;
  export const useAppSelector: TypedUseSelectorHook<RootState>;
}

export {};
