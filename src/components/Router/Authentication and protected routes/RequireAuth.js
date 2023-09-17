import React from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

//wrapper compoenent to protect route
export const RequireAuth = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return children;
};
