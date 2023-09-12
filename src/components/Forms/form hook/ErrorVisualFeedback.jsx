import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

export const ErrorVisualFeedback = () => {
  const { register, handleSubmit, control, formState } = useForm();
  const { errors } = formState;

  const formSubmission = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(formSubmission)}>
        <div>
          <label htmlFor="username"></label>
          <input type="text" {...register("username", { required: true })} />
          {errors.username && (
            <div style={{ color: "#ff0000" }}>Username is required</div>
          )}
        </div>

        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 10,
            })}
          />
          {errors.password?.type === "required" && (
            <div style={{ color: "#ff0000" }}>Password is required</div>
          )}
          {errors.password?.type === "minLength" && (
            <div style={{ color: "#ff0000" }}>
              Minimum 6 character is required
            </div>
          )}
          {errors.password?.type === "maxLength" && (
            <div style={{ color: "#ff0000" }}>
              Maximum 10 character is required
            </div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
};
