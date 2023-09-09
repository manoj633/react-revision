import React, { useState, useRef, useEffect } from "react";

// Custom hook to persist a value across renders
function usePrevious(value) {
  const ref = useRef();

  //runs functoin only on value change
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function Counter() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count); // Use the custom hook to get the previous count

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {previousCount}</p>
      <button onClick={handleIncrement}>Increment Count</button>
    </div>
  );
}

export default Counter;
