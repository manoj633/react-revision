import React from "react";

const ForwardRefChild = React.forwardRef((props, ref) => {
  const focusHandler = () => {
    console.log("Input focused");
  };
  return (
    <div>
      <h1>This is an example of forward ref</h1>
      <input type="text" ref={ref} onFocus={focusHandler} />
      <button type="button" onClick={props.clickHandler}>
        Focus Input
      </button>
    </div>
  );
});

export default ForwardRefChild;
