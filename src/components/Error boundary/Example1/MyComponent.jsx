import React from "react";

function MyComponent() {
  if (Math.random() < 0.5) {
    throw new Error("Random number less than 0.5");
  }
  return <div>MyComponent</div>;
}

export default MyComponent;
