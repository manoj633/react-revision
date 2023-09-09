import React from "react";

function ConditionalRendering(props) {
  // Using if else
  //   if (props.condition) {
  //     return <p style={{ marginLeft: "30px" }}>True!</p>;
  //   } else {
  //     return <p style={{ marginLeft: "30px" }}>False!</p>;
  //   }

  //Using ternary operators
  //   return (
  //     <>
  //       {props.condition ? (
  //         <p style={{ marginLeft: "30px" }}>True!</p>
  //       ) : (
  //         <p style={{ marginLeft: "30px" }}>False!</p>
  //       )}
  //     </>
  //   );

  //Using && operator to render only if condition is true
  return <>{props.condition && <p style={{ marginLeft: "30px" }}>True!</p>}</>;

  //Separate function can also be created to compute content
}

export default ConditionalRendering;
