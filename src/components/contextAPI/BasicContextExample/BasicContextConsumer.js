import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function BasicContextConsumer() {
  const theme = useContext(ThemeContext);

  return (
    <main
      style={{ backgroundColor: theme === "light" ? "#ffff00" : "#f0f0f0" }}
    >
      Content
    </main>
  );
}

export default BasicContextConsumer;
