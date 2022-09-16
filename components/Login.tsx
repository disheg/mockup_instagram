import React, { useState } from "react";
import { setCookie } from "nookies";
import { UserApi } from "../utils/api";
import { LoginDto } from "../utils/api/types";
import { useAppDispatch } from "../redux/hooks";
import { setUserData } from "../redux/slices/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dto: LoginDto = { email, password };
    try {
      const data = await UserApi.login(dto);
      console.log(data);
      setCookie(null, "authToken", data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      dispatch(setUserData(data));
    } catch (error) {
      console.warn("Login Error", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Login</div>
        <label>Email</label>
        <input value={email} onChange={handleChangeEmail} />
        <label>Password</label>
        <input value={password} onChange={handleChangePassword} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
