import React from "react";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <img src="/footer/Home.png" />
      <img src="/footer/Reel.png" />
      <img className={styles.publishIcon} src="/footer/Publish.png" />
      <img src="/footer/Shopping.png" />
      <img src="/footer/Profile.png" />
    </div>
  );
};

export default Navigation;
