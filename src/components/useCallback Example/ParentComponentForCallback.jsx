import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponentForCallback() {
  const [age, setAge] = useState(18);
  const [salary, setSalary] = useState(10000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <>
      <Title>useCallback hook</Title>
      <Count text={"Age"} count={age} />
      <Button handleClick={incrementAge}>Increment age</Button>
      <Count text={"Salary"} count={salary} />
      <Button handleClick={incrementSalary}>Increment salary</Button>
    </>
  );
}

export default ParentComponentForCallback;
