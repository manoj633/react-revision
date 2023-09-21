import React, { useReducer, useState } from "react";

const initalState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { firstCounter: state.firstCounter - 1 };
    case "incrementbyvalue":
      return { firstCounter: state.firstCounter + +action.payload.value };
    case "decrementbyvalue":
      console.log(action.payload);
      return { firstCounter: state.firstCounter - +action.payload.value };
    case "reset":
      return initalState;
    default:
      return state;
  }
};
function CounterWithUseReducerAndPayload() {
  const [value, setValue] = useState(0);
  const [count, dispatch] = useReducer(reducer, initalState);

  return (
    <>
      <div>
        <div>Count = {count.firstCounter}</div>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          Decrement
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
      </div>
      <br />
      <div>
        <label htmlFor="value">Enter a value</label>
        <input
          type="number"
          name="value"
          id="value"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "incrementbyvalue", payload: { value } });
          }}
        >
          Increment by {value}
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "decrementbyvalue", payload: { value } });
          }}
        >
          Decrement by {value}
        </button>
      </div>
    </>
  );
}

export default CounterWithUseReducerAndPayload;
