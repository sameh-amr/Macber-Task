import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: any }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/" replace />;
};
