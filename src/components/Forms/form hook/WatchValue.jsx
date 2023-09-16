import { DevTool } from "@hookform/devtools";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export const WatchValue = () => {
  const { register, control, watch } = useForm();

  //watching age field
  const watchedValue = watch("age");

  //performing side-effects based on age change
  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
    });
    //needs explicit unsubscribe from watch
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <div>watched Value: {watchedValue}</div>
      <form>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          {...register("age", { valueAsNumber: true })}
        />
      </form>
      <DevTool control={control} />
    </>
  );
};
