import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function FormSubmission() {
  const { register, control, formState, handleSubmit } = useForm();
  const { errors } = formState;

  const forSubmissionHandler = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(forSubmissionHandler)}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="text" {...register("email")} id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" {...register("password")} id="password" />
        </div>

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
}

export default FormSubmission;
