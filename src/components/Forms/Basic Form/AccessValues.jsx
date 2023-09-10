import React, { useState } from "react";

function AccessValues() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [hobbies, setHobbies] = useState("");

  const clickHandler = () => {
    console.log(
      `Username: ${username}\n Description: ${description}\n Hobbies: ${hobbies}`
    );
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <select
          name="hobbies"
          id="hobbies"
          value={hobbies}
          onChange={(e) => {
            setHobbies(e.target.value);
          }}
        >
          <option value="run">Run</option>
          <option value="swim">Swim</option>
          <option value="read">Read</option>
        </select>
        <button type="button" onClick={clickHandler}>
          console log
        </button>
      </form>
    </>
  );
}

export default AccessValues;
