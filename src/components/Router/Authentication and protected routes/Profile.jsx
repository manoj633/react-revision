import React from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <>
      <div>Profile of {auth.user}</div>
      <button type="button" onClick={logoutHandler}>
        Logout
      </button>
    </>
  );
};
