import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
export const CustomFormValidation = () => {
  const { register, control, formState, handleSubmit } = useForm();
  const { errors } = formState;

  const formSubmission = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(formSubmission)}>
        <div>
          {/* Single validation function */}
          <input
            type="text"
            {...register("email", {
              validate: (fieldValue) => {
                return (
                  fieldValue !== "admin@example.com" ||
                  "Entered illegal mail adress"
                );
              },
            })}
          />

          {/* Callback object sent for validation */}
          <input
            type="number"
            id="price"
            {...register("price", {
              validate: {
                positive: (value) => parseInt(value) > 0,
                lessThanTen: (value) => parseInt(value) < 10,
              },
            })}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};
