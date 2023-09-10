import React, { useState } from "react";

function ValidateInput() {
  const [username, setUsername] = useState(null);
  const [inputError, setInputError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== null && username !== "") {
      setInputError("");
    } else {
      setInputError("Input required");
    }

    console.log("Username: " + username);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        {inputError && <div style={{ color: "#ff0000" }}>{inputError}</div>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ValidateInput;
