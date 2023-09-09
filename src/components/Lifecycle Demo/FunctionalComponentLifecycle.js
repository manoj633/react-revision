import React, { useState, useEffect } from "react";

function FunctionalComponentLifecycle() {
  const [count, setCount] = useState(0);

  function clickHandler() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("Component mounted successfully");
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Component updated successfully");
  }, [count]);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={clickHandler}>Increment</button>
    </>
  );
}

export default FunctionalComponentLifecycle;
