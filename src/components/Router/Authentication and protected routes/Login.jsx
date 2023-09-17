import React, { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();

  const loginHandler = () => {
    auth.login(username);
    navigate("/", { replace: true });
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
