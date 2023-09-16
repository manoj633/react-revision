import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <>
      <div>Users</div>
      <Outlet />
      <button
        type="button"
        onClick={() => setSearchParams({ filter: "active" })}
      >
        Active Users
      </button>
      <button type="button" onClick={() => setSearchParams({})}>
        Clear filter
      </button>
      {showActiveUsers ? <p>Active Users Only</p> : <p>Showing all users</p>}
    </>
  );
};
