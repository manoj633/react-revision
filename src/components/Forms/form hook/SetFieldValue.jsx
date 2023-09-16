import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

export const SetFieldValue = () => {
  const { register, control, getValues, setValue } = useForm();

  const handleGetValues = () => {
    console.log(getValues());
  };

  const handleSetValues = () => {
    setValue("age", 18, {
      shouldValidate: true,
      shouldTouch: true,
      shouldDirty: true,
    });
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
        <button type="button" onClick={handleSetValues}>
          Set default value
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
};
