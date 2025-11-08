import CrmLayout from "@/components/crm-layout";
import { createBrowserRouter } from "react-router";
import { routes } from "./routes";

export const appRouter = createBrowserRouter([
  {
    element: <CrmLayout />,
    children: routes,
  },
]);
