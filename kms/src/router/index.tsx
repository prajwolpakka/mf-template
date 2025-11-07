import KmsLayout from "@/components/kms-layout";
import { createBrowserRouter } from "react-router";
import { routes } from "./routes";

export const appRouter = createBrowserRouter([
  {
    element: <KmsLayout />,
    children: routes,
  },
]);
