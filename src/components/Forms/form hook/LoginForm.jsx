import React from "react";

export const LoginForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
