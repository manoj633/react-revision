import React, { useRef } from "react";

function UncontrolledComponent() {
  const inputRef = useRef(null);

  function handleClick() {
    console.log(`Input value: ${inputRef.current.value}`);
  }

  return (
    <>
      <form>
        <input type="text" name="username" id="username" ref={inputRef} />
        <button type="button" onClick={handleClick}>
          Console log
        </button>
      </form>
    </>
  );
}

export default UncontrolledComponent;
