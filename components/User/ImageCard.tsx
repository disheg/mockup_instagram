import React from "react";
import styles from "./ImageCard.module.scss";

const ImageCard = (isOpen) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.user}>
          {isOpen ? <img src="/Back.png" /> : <></>}
          <img className={styles.userAvatar} src="/Test/userAvatar1.png" />
          <p>David Morel</p>
        </div>
        <img className={styles.moreIcon} src="/More.png" />
      </div>
      <div className={styles.cardBody}>
        <img src="/Test/userImage1.png" />
        <div className={styles.cardFooter}>
          <div className={styles.cardFooterElement}>
            <img src="/feed/Like.png" />
            <p>5,2k</p>
          </div>
          <div className={styles.cardFooterElement}>
            <img src="/Comment.png" />
            <p>140</p>
          </div>
          <div className={styles.cardFooterElement}>
            <img src="/Send.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
