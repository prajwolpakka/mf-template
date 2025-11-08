/// <reference types="vite/client" />

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

declare module "shared/app-layout" {
  import type { LucideIcon } from "lucide-react";
  import type { ComponentType, ReactNode } from "react";

  type LayoutUser = {
    name: string;
    email: string;
    avatar: string;
  };

  type LayoutTeam = {
    name: string;
    logo: LucideIcon;
    plan: string;
  };

  type LayoutNavItem = {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: { title: string; url: string; isActive?: boolean }[];
  };

  type AppLayoutProps = {
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
  };

  const AppLayout: ComponentType<AppLayoutProps>;
  export default AppLayout;
}
