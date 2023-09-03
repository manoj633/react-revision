import React, { useContext } from "react";
import UserContext from "./UserContext";

function Header({ login, logout }) {
  const authenticationDetails = useContext(UserContext);
  return (
    <header>
      {authenticationDetails.isAuthenticated ? (
        <>
          <p>Welcome {authenticationDetails.user?.username}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </header>
  );
}

export default Header;
