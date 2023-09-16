import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};
