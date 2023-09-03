import React from "react";

function ChildComponent(props) {
  return (
    <>
      <div>{props.message}</div>
      {/* A function in parent is passed as prop to child */}
      {/* prop.onClick contains reference to function defined in parent */}
      <button onClick={props.onClick}>Click me!</button>
      <>{props.children}</>
      <h1>Some basic details</h1>
      <div>
        <p>Name: {props.user.name}</p>
        <p>Age: {props.user.age}</p>
      </div>
    </>
  );
}

export default ChildComponent;
