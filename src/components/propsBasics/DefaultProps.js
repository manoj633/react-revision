import React from "react";

function DefaultProps(props) {
  return <p>{props.names}</p>;
}

export default DefaultProps;

//defining default props
DefaultProps.defaultProps = {
  names: "Mary",
};
