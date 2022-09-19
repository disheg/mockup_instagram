import React from "react";
import styles from "./SignIn.module.scss";
import { useAppSelector } from "../../../redux/hooks";
import { selectUserData } from "../../../redux/slices/user";
import Login from "../Login";
import Register from "../signup";

const index = () => {
  const userData = useAppSelector(selectUserData);
  console.log(userData);
  return (
    <div className={styles.container}>
      <div className={styles.signin}>
        <div className={styles.header}>
          <h1>Sign in to</h1>
          <h1>Instagram</h1>
          <p>Enter your details below</p>
        </div>
        <form className={styles.formSignin}>
          <div className={styles.formBlock}>
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <input
              id="email"
              className={styles.email}
              type="text"
              name="email"
              placeholder="Email"
            ></input>
          </div>
          <div className={styles.formBlock}>
            <div className={styles.passwordLabel}>
              <label htmlFor="email">Password</label>
              <a>Forgot password?</a>
            </div>
            <input
              id="email"
              className={styles.password}
              type="text"
              name="email"
              placeholder="Password"
            ></input>
          </div>
          <button>Sign in</button>
        </form>
        <div className={styles.footer}>
          <p>
            Not a member? <a>Signup now</a>
          </p>
          <img className={styles.logo} src="/Logo.png"></img>
        </div>
      </div>
    </div>
  );
};

export default index;

/**      {userData ? (
          <div>Hello</div>
        ) : (
          <div>
            <Login />
            <Register />
          </div>
        )}
        */
