import Dashboard from "@/pages/Dashboard";
import LoginPage from "@/pages/LoginPage";
import TestPage from "@/pages/TestPage";
import { Navigate } from "react-router";

export const publicRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export const privateRoutes = [
  {
    index: true,
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
];
