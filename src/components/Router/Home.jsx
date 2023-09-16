import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      <button
        type="button"
        onClick={() => {
          navigate("order-summary");
        }}
      >
        Order Summary
      </button>
    </>
  );
};
