import React from "react";
import ChildComponent from "./Child";
function ParentComponent() {
  const user = {
    name: "John Doe",
    age: 30,
  };
  function handleClick() {
    alert("Button clicked");
  }
  return <ChildComponent message={"Hello"} onClick={handleClick} user={user} />;
}

export default ParentComponent;
