import React, { useContext } from "react";
import { CountContext } from "../../../App";

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <span>Component D</span>
      <button
        type="button"
        onClick={() => {
          countContext.countDispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => {
          countContext.countDispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => {
          countContext.countDispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ComponentD;
