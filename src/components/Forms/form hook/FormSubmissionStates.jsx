import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

export const FormSubmissionStates = () => {
  const { register, control, getValues, handleSubmit, formState } = useForm();
  const {
    isValid,
    isDirty,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
    submitCount,
  } = formState;

  console.log("isSubmitted", isSubmitted);
  console.log("isSubmittedSuccessful", isSubmitSuccessful);
  console.log("isSubmitting", isSubmitting);
  console.log("submitCount", submitCount);

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
        <div>Check console</div>
        <button type="submit" disabled={!isDirty && !isValid && isSubmitting}>
          Submit
        </button>
        <button type="button" onClick={handleGetValues}>
          Get values in console
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
};
