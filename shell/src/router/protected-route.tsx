import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/store";
import { selectAuth } from "../store/actions";

const ProtectedRoute = () => {
  const location = useLocation();
  const { user, token } = useAppSelector(selectAuth);
  const isAuthenticated = Boolean(user && token);

  if (!isAuthenticated) {
    // Redirect to login page, but save the current location they were trying to go to
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
