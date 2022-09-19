import React from "react";
import Link from "next/link";
import styles from "./Auth.module.scss";

const index = () => {
  return (
    <div className={styles.root}>
      <div className={styles.bg}></div>
      <div className={styles.auth}>
        <div className={styles.authHeader}>
          <Link href="auth/singin">
            <button className={styles.btn}>Sign in with your email</button>
          </Link>
          <p>
            Not a member? <Link href="auth/signup">Signup now</Link>
          </p>
        </div>
        <img className={styles.logo} src="/Logo.png"></img>
      </div>
    </div>
  );
};

export default index;
