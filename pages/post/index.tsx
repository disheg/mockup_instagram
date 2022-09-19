import React from "react";
import styles from "./Post.module.scss";
import ImageCard from "../../components/User/ImageCard";
import MainLayout from "../../layouts/MainLayout";

const Post = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <ImageCard isOpen={true} />
        <div className={styles.footer}>
          <p>Liked by</p>
          <p>
            <span>Sean</span>, <span>John</span>, and 120 others
          </p>
        </div>
        <div className={styles.comments}>
          <div className={styles.comment}>
            <img className={styles.userAvatar} src="/Test/userAvatar1.png" />
            <div className={styles.commentBody}>
              <div className={styles.commentInfo}>
                <span className={styles.userName}>Jessica Smith</span>
                <span className={styles.commentTime}>10m ago</span>
              </div>
              <span className={styles.commentText}>
                I remember that day I remember that dayI remember that dayI
                remember that dayI remember that dayI remember that dayI
                remember that day
              </span>
            </div>
            <img className={styles.likeIcon} src="/feed/Like.png" />
          </div>
          <div className={styles.comment}>
            <img className={styles.userAvatar} src="/Test/userAvatar1.png" />
            <div className={styles.commentBody}>
              <div className={styles.commentInfo}>
                <span className={styles.userName}>Jessica Smith</span>
                <span className={styles.commentTime}>10m ago</span>
              </div>
              <span className={styles.commentText}>
                I remember that day I remember that dayI remember that dayI
                remember that dayI remember that dayI remember that dayI
                remember that day
              </span>
            </div>
            <img className={styles.likeIcon} src="/feed/Like.png" />
          </div>
          <div className={styles.comment}>
            <img className={styles.userAvatar} src="/Test/userAvatar1.png" />
            <div className={styles.commentBody}>
              <div className={styles.commentInfo}>
                <span className={styles.userName}>Jessica Smith</span>
                <span className={styles.commentTime}>10m ago</span>
              </div>
              <span className={styles.commentText}>
                I remember that day I remember that dayI remember that dayI
                remember that dayI remember that dayI remember that dayI
                remember that day
              </span>
            </div>
            <img className={styles.likeIcon} src="/feed/Like.png" />
          </div>
          <div className={styles.comment}>
            <img className={styles.userAvatar} src="/Test/userAvatar1.png" />
            <div className={styles.commentBody}>
              <div className={styles.commentInfo}>
                <span className={styles.userName}>Jessica Smith</span>
                <span className={styles.commentTime}>10m ago</span>
              </div>
              <span className={styles.commentText}>
                I remember that day I remember that dayI remember that dayI
                remember that dayI remember that dayI remember that dayI
                remember that day
              </span>
            </div>
            <img className={styles.likeIcon} src="/feed/Like.png" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Post;
