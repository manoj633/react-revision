import { useState } from "react";
import UserContext from "./UserContext";
import Header from "./Header";
import Content from "./Content";

function UserContextProvider() {
  const [data, setData] = useState({ isAuthenticated: false, user: null });

  function login() {
    setData({ isAuthenticated: true, user: { username: "John Smith" } });
  }

  function logout() {
    setData({ isAuthenticated: false, user: null });
  }

  return (
    <UserContext.Provider value={data}>
      <Header login={login} logout={logout} />
      <Content />
    </UserContext.Provider>
  );
}

export default UserContextProvider;
