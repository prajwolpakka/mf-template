import { BookOpen, Workflow } from "lucide-react";
import { useMemo, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Outlet } from "react-router-dom";
import { logout, selectAuth } from "shared/store";

// @ts-ignore -- Remote module is provided by Module Federation at runtime.
const AppLayout = lazy(() => import("shared/app-layout").then(m => ({ default: m.default })));

const KmsLayout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);
  const basePath = location.pathname.startsWith("/kms") ? "/kms" : "";
  const currentPath = location.pathname.endsWith("/") && location.pathname.length > 1
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const SIDEBAR_TEAMS = [
    {
      name: "Zeta Labs",
      logo: Workflow,
      plan: "Knowledge Hub",
    },
  ];

  const navMain = useMemo(() => {
    const toPath = (path: string) => `${basePath}${path}`;

    const items = [
      {
        title: "Dashboard",
        url: toPath("/dashboard"),
      },
      {
        title: "Test Page",
        url: toPath("/test"),
      },
    ];

    return [
      {
        title: "Knowledge",
        url: toPath("/dashboard"),
        icon: BookOpen,
        items,
      },
    ].map((item) => {
      const nestedItems = item.items?.map((subItem) => ({
        ...subItem,
        isActive: currentPath === subItem.url,
      }));

      const isActive =
        currentPath === item.url ||
        (basePath ? currentPath === basePath : currentPath === "/") ||
        nestedItems?.some((subItem) => subItem.isActive);

      return {
        ...item,
        isActive,
        items: nestedItems,
      };
    });
  }, [basePath, currentPath]);

  const sidebarUser = useMemo(
    () => ({
      name: user?.name ?? "Knowledge Lead",
      email: user?.email ?? "kms.team@example.com",
      avatar: "/avatars/shadcn.jpg",
    }),
    [user]
  );

  return (
    <Suspense fallback={<div>Loading layout...</div>}>
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
              onClick={() => dispatch(logout())}
              className="rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Sign out
            </button>
          </div>
        }
        contentWrapperClassName="bg-muted"
      >
        <Outlet />
      </AppLayout>
    </Suspense>
  );
};

export default KmsLayout;
