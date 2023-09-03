import React, { useState } from "react";

function CounterComponent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment Count</button>
    </>
  );
}

export default CounterComponent;
