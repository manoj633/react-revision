import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
export const FormValidation = () => {
  const { register, control, formState, handleSubmit } = useForm();
  const { errors } = formState;

  const forSubmissionHandler = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(forSubmissionHandler)}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", { required: true })}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            {...register("email", {
              pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            })}
            id="email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", { minLength: 6, maxLength: 10 })}
            id="password"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
};
