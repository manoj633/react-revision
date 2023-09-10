import React, { useEffect, useState } from "react";

function ControlledComponent() {
  const [username, setUserName] = useState("");

  useEffect(() => {
    console.log(username);
  }, [username]);
  return (
    <>
      <form>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </form>
    </>
  );
}

export default ControlledComponent;
