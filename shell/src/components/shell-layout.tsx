import { Briefcase, LayoutDashboard, Library, LucideIcon, Workflow } from "lucide-react";
import { Suspense, lazy, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import { logout as logoutAction, selectAuth } from "../store/actions";

// @ts-ignore Remote module is provided by Module Federation at runtime.
const AppLayout = lazy(() => import("shared/app-layout"));

type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  items?: { title: string; url: string; isActive?: boolean }[];
};

const NAV_ITEMS: NavItem[] = [
  {
    title: "Shell",
    url: "/dashboard",
    icon: LayoutDashboard,
    items: [
      { title: "Dashboard", url: "/dashboard" },
      { title: "Test Page", url: "/test" },
    ],
  },
  {
    title: "CMS",
    url: "/crm",
    icon: Briefcase,
    items: [
      { title: "Dashboard", url: "/crm/dashboard" },
      { title: "Test Page", url: "/crm/test" },
    ],
  },
  {
    title: "KMS",
    url: "/kms",
    icon: Library,
    items: [
      { title: "Dashboard", url: "/kms/dashboard" },
      { title: "Test Page", url: "/kms/test" },
    ],
  },
];

const SIDEBAR_TEAMS = [
  {
    name: "Zeta Labs",
    logo: Workflow,
    plan: "Microfrontend Test",
  },
];

const ModuleFallback = ({ label }: { label: string }) => (
  <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">Loading {label}...</div>
);

const ShellLayout = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectAuth);

  const navMain = useMemo(
    () =>
      NAV_ITEMS.map((item) => {
        const isActive =
          location.pathname === item.url ||
          location.pathname.startsWith(`${item.url}/`) ||
          item.items?.some((subItem) => location.pathname === subItem.url);

        const items = item.items?.map((subItem) => ({
          ...subItem,
          isActive: location.pathname === subItem.url,
        }));

        return {
          ...item,
          isActive,
          items,
        };
      }),
    [location.pathname]
  );

  const sidebarUser = useMemo(
    () => ({
      name: user?.name ?? "Operations Lead",
      email: user?.email ?? "ops.team@example.com",
      avatar: "/avatars/shadcn.jpg",
    }),
    [user]
  );

  return (
    <Suspense fallback={<ModuleFallback label="layout" />}>
      <AppLayout
        navMain={navMain}
        teams={SIDEBAR_TEAMS}
        user={sidebarUser}
        headerActions={
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground md:inline">
              Signed in{user?.name ? ` as ${user.name}` : ""}
            </span>
            <button
              type="button"
              onClick={() => dispatch(logoutAction())}
              className="rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Sign out
            </button>
          </div>
        }
        contentWrapperClassName="bg-muted"
      >
        <Suspense fallback={<ModuleFallback label="module" />}>
          <Outlet />
        </Suspense>
      </AppLayout>
    </Suspense>
  );
};

export default ShellLayout;
