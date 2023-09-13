import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

export const DefaultValues = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      username: "manoj",
      email: "admin@example.com",
    },
  });

  const FormSubmitHandler = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(FormSubmitHandler)}>
        <input type="text" id="username" {...register("username")} />
        <input type="email" id="email" {...register("email")} />
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
};
