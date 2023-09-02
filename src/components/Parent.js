import React from "react";
import ChildComponent from "./Child";
function ParentComponent() {
  function handleClick() {
    alert("Button clicked");
  }
  return <ChildComponent message={"Hello"} onClick={handleClick} />;
}

export default ParentComponent;
