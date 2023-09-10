import React, { useState } from "react";

function AccessValues() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSelected, setIsSelected] = useState("option1");

  const clickHandler = () => {
    console.log(
      `Username: ${username}\n Description: ${description}\n Hobbies: ${hobbies}\n Is checked: ${isChecked}\n Option selected: ${isSelected}`
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

        <input
          type="checkbox"
          name="checkbox1"
          id="checkbox1"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />

        <input
          type="radio"
          name="radioGroup"
          value="option1"
          checked={isSelected === "option1"}
          onChange={() => {
            setIsSelected("option1");
          }}
        />
        <input
          type="radio"
          name="radioGroup"
          value="option2"
          checked={isSelected === "option2"}
          onChange={() => {
            setIsSelected("option2");
          }}
        />
        <input
          type="radio"
          name="radioGroup"
          value="option3"
          checked={isSelected === "option3"}
          onChange={() => {
            setIsSelected("option3");
          }}
        />

        <button type="button" onClick={clickHandler}>
          console log
        </button>
      </form>
    </>
  );
}

export default AccessValues;
