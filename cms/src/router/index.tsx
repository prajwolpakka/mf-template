import CmsLayout from "@/components/cms-layout";
import { createBrowserRouter } from "react-router";
import { routes } from "./routes";

export const appRouter = createBrowserRouter([
  {
    element: <CmsLayout />,
    children: routes,
  },
]);
