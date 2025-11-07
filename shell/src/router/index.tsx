import ShellLayout from "@/components/shell-layout";
import { routes as CmsRoutes } from "cms_app/routes";
import { routes as KmsRoutes } from "kms_app/routes";
import { createBrowserRouter } from "react-router";
import ProtectedRoute from "./protected-route";
import { privateRoutes, publicRoutes } from "./routes";

export const appRouter = createBrowserRouter([
  ...publicRoutes,
  {
    element: <ShellLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [...privateRoutes, ...CmsRoutes, ...KmsRoutes],
      },
    ],
  },
]);
