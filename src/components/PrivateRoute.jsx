import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  // Check if user is authenticated by looking for a specific flag in localStorage
  const isAuthenticated = localStorage.getItem("authenticated") === "true";

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
