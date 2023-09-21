import React from "react";

function Title(props) {
  console.log("Rendered title");
  return <h1>{props.children}</h1>;
}

export default React.memo(Title);
