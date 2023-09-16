import { DevTool } from "@hookform/devtools";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export const TouchedAndDirtyFields = () => {
  const { register, control, formState } = useForm();
  const { touchedFields, dirtyFields } = formState;

  console.log("Touched fields", touchedFields);
  console.log("Dirty fields", dirtyFields);

  return (
    <>
      <form>
        <div>
          <label htmlFor="username">User name:</label>
          <input type="text" id="username" {...register("username")} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            {...register("age", { valueAsNumber: true })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
};
