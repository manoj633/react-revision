import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

export const NestedObject = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      email: "",
      socials: {
        facebook: "",
        twitter: "",
      },
    },
  });

  const FormSubmitHandler = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(FormSubmitHandler)}>
        <input type="text" id="username" {...register("username")} />
        <input type="text" id="email" {...register("email")} />
        <input type="text" id="facebook" {...register("socials.facebook")} />
        <input type="text" id="twitter" {...register("socials.twitter")} />
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
};
