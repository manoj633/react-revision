import React from "react";

function Child(props) {
  const data = {
    inputData: 1,
    name: "Manoj",
  };
  const clickHandler = () => {
    props.dataLoader(data);
  };
  return (
    <div>
      <button onClick={clickHandler}>Pass data from child to parent</button>
    </div>
  );
}

export default Child;
