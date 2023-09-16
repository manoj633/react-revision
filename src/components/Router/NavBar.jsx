import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
export const NavBar = () => {
  const enableActiveLink = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav>
      <NavLink style={enableActiveLink} to="/">
        Home
      </NavLink>
      <NavLink style={enableActiveLink} to="/about">
        About
      </NavLink>
    </nav>
  );
};
