import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  return (
    <>
      <div>User Details of User {userId}</div>
    </>
  );
};
