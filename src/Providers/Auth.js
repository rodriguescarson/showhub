import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function useAuth() {
  return React.useContext(AuthContext);
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    setTimeout(() => {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }, 0);
  }

  return children;
}

export { RequireAuth, useAuth };
