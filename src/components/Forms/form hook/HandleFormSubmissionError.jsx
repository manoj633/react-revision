import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

export const HandleFormSubmissionError = () => {
  const { register, control, getValues, handleSubmit } = useForm();

  const handleGetValues = () => {
    console.log(getValues());
  };

  const FormSubmissionHandler = (data) => console.log(data);

  const FormSubmissionErrorHandler = (errors) => console.log("Error ", errors);
  return (
    <>
      <form
        onSubmit={handleSubmit(
          FormSubmissionHandler,
          FormSubmissionErrorHandler
        )}
      >
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          {...register("age", {
            valueAsNumber: true,
            required: "Value not entered",
          })}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleGetValues}>
          Get values in console
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
};
