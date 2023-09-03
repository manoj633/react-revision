import { createContext } from "react";

const UserContext = createContext({ isAuthenticated: false, user: null });

export default UserContext;
