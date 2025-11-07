import KnowledgeHomePage from "../pages/dashboard";
import TestPage from "../pages/test";

export const routes = [
  {
    path: "kms/dashboard",
    element: <KnowledgeHomePage />,
  },
  {
    path: "kms/test",
    element: <TestPage />,
  },
];
