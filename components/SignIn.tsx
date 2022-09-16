import React from "react";
import { useAppSelector } from "../redux/hooks";
import { selectUserData } from "../redux/slices/user";
import Login from "./Login";
import Register from "./Register";

const SignIn = () => {
  const userData = useAppSelector(selectUserData);
  console.log(userData);
  return (
    <>
      {userData ? (
        <div>Hello</div>
      ) : (
        <div>
          <Login />
          <Register />
        </div>
      )}
    </>
  );
};

export default SignIn;
