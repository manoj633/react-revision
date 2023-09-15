import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
export const LoginForm = () => {
  const form = useForm();
  const { register, control } = form;
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />

        <label htmlFor="email">Email</label>
        <input type="text" {...register("email")} id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" {...register("password")} id="password" />

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
