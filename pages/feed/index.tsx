import React from "react";
import MainLayout from "../../layouts/MainLayout";
import styles from "./Feed.module.scss";

const Feed = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src="/Logo.png" />
            <p>Instagram</p>
          </div>
          <div className={styles.menu}>
            <img src="/feed/Search.png" />
            <img src="/feed/Like.png" />
            <img src="/feed/Message.png" />
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.user}>
                <img src="/Test/userAvatar1.png" />
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
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.user}>
                <img src="/Test/userAvatar1.png" />
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
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.user}>
                <img src="/Test/userAvatar1.png" />
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
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.user}>
                <img src="/Test/userAvatar1.png" />
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
        </div>
      </div>
    </MainLayout>
  );
};

export default Feed;
