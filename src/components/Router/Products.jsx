import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <div>
        <input type="text" name="search-product" id="search-product" />
      </div>
      <Link to="featured">Featured</Link>
      <Link to="new">New</Link>
      <Outlet />
    </>
  );
};
