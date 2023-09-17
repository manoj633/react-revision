import React, { useState } from "react";
import { useAuth } from "./auth";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.path || "/";

  const loginHandler = () => {
    auth.login(username);
    navigate(redirectTo, { replace: true });
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="button" onClick={loginHandler}>
        Login
      </button>
    </div>
  );
};
