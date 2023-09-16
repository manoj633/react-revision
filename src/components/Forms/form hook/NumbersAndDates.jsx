import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

export const NumbersAndDates = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      age: 0,
      dob: new Date(),
    },
  });

  const submitForm = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="age">Enter the age</label>
        <input
          type="number"
          id="age"
          {...register("age", { valueAsNumber: true })}
        />
        <label htmlFor="dob">Enter the Date of birth</label>
        <input
          type="date"
          id="dob"
          {...register("dob", { valueAsDate: true })}
        />
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
};
