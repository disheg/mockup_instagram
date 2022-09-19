import React from "react";
import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.infoHeader}>
          <div className={styles.followers}>
            <h3>300K</h3>
            <p>Followers</p>
          </div>
          <img src="/Test/Photo.png" />
          <div className={styles.following}>
            <h3>130</h3>
            <p>Following</p>
          </div>
        </div>
        <div className={styles.userInfo}>
          <h3>David Morel</h3>
          <p>UX/UI Designer</p>
        </div>
        <div className={styles.footer}>
          <button className={styles.btnFollow}>Follow</button>
          <button className={styles.btnMessage}>Message</button>
        </div>
      </div>
      <div className={styles.posts}>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>{" "}
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>{" "}
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
        <div className={styles.post}>
          <img src="/Test/userImage1.png" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
