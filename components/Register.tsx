import React, { useState } from "react";
import { setCookie } from "nookies";
import { UserApi } from "../utils/api";
import { CreateUserDto } from "../utils/api/types";
import { useAppDispatch } from "../redux/hooks";

const Register = () => {
  const [fullName, setFullName] = useState("");
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

  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dto: CreateUserDto = { fullName, email, password };
    try {
      const data = await UserApi.register(dto);
      console.log(data);
      setCookie(null, "authToken", data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      dispatch(setUserData(data));
    } catch (error) {
      console.warn("Registration Error", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Register</div>
        <label>Fullname</label>
        <input value={fullName} onChange={handleChangeFullName} />
        <label>Email</label>
        <input value={email} onChange={handleChangeEmail} />
        <label>Password</label>
        <input value={password} onChange={handleChangePassword} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
