import type { ComponentProps, ReactNode } from "react";

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useGetUser } from "@/services/hooks";
import AppHeader from "./app-header";
import AppSidebar from "./app-sidebar";

type AppSidebarProps = ComponentProps<typeof AppSidebar>;
type SidebarExtras = Omit<AppSidebarProps, "user" | "teams" | "navMain">;

export type AppLayoutNavItem = AppSidebarProps["navMain"][number];
export type AppLayoutTeam = AppSidebarProps["teams"][number];
export type AppLayoutUser = AppSidebarProps["user"];

export type AppLayoutProps = {
  navMain: AppLayoutNavItem[];
  teams: AppLayoutTeam[];
  user?: AppLayoutUser;
  children?: ReactNode;
  headerActions?: ReactNode;
  headerLeft?: ReactNode;
  insetClassName?: string;
  contentWrapperClassName?: string;
  contentClassName?: string;
  sidebarProps?: SidebarExtras;
};

const AppLayout = ({
  navMain,
  teams,
  user,
  children,
  headerActions,
  headerLeft,
  insetClassName,
  contentWrapperClassName,
  contentClassName,
  sidebarProps,
}: AppLayoutProps) => {
  const { data: headerUser } = useGetUser();

  const resolvedUser = headerUser ?? user;

  if (!resolvedUser) {
    return null;
  }

  const sidebarTrigger = headerLeft ?? <SidebarTrigger className="md:hidden" />;

  return (
    <SidebarProvider>
      <AppSidebar user={resolvedUser} teams={teams} navMain={navMain} {...sidebarProps} />
      <SidebarInset className={cn("bg-muted", insetClassName)}>
        <AppHeader leftSide={sidebarTrigger} actions={headerActions} />
        <div className={cn("flex flex-1 flex-col overflow-y-auto bg-transparent", contentWrapperClassName)}>
          <main className={cn("flex-1 p-6", contentClassName)}>{children}</main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
