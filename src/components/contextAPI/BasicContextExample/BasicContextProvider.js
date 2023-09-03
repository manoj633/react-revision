import React, { useState } from "react";
import BasicContextConsumer from "./BasicContextConsumer";
import ThemeContext from "./ThemeContext";

function BasicContextProvider() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Toggle theme
      </button>
      <BasicContextConsumer />
    </ThemeContext.Provider>
  );
}

export default BasicContextProvider;
