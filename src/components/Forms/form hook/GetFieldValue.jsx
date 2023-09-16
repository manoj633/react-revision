import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

export const GetFieldValue = () => {
  const { register, control, getValues } = useForm();

  const handleGetValues = () => {
    console.log(getValues());
  };
  return (
    <>
      <form>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          {...register("age", { valueAsNumber: true })}
        />
        <button type="button" onClick={handleGetValues}>
          Get values in console
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
};
