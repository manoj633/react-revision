import React from "react";
import Child from "./Child";

function Parent() {
  function loadDataFromChild(data) {
    console.log(data);
  }
  return (
    <div>
      <Child dataLoader={loadDataFromChild} />
    </div>
  );
}

export default Parent;
