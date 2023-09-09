import React from "react";

const ForwardRefSecondChild = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h1>This is an example of forward ref</h1>
      <button type="button" onClick={props.clickHandler}>
        Change background color
      </button>
    </div>
  );
});

export default ForwardRefSecondChild;
