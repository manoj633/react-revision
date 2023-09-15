import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

export const ArrayOfFieldValues = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      email: "",
      socials: {
        facebook: "",
        twitter: "",
      },
      phoneNumber: ["", ""],
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
        <input type="text" id="primary" {...register("phoneNumber[0]")} />
        <input type="text" id="secondary" {...register("phoneNumber[1]")} />

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
};
