import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Posts.module.css';

const Posts = ({ title, content, username, avatar, postId }) => {
  return (
    <>
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <div className={styles.userInfo}>
            <img
              src={avatar || "/images/avatar.webp"}
              alt="Profile"
              className={styles.profileImg}
            />
            <span className={styles.username}>{username}</span>
          </div>
          <button className={styles.moreBtn}>•••</button>
        </div>

        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
      </div>
    </>
  );
};

export default Posts;
