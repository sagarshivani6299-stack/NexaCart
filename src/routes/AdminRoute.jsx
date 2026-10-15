import {
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const AdminRoute = () => {
  const { user } = useAuth();

  const location = useLocation();

  // Login नहीं
  if (!user) {
    return (
      <Navigate
        to="/admin/login"
        state={{
          from: location.pathname,
        }}
        replace
      />
    );
  }

  // Login है लेकिन customer है
  if (user.role !== "admin") {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  // Proper admin
  return <Outlet />;
};

export default AdminRoute;