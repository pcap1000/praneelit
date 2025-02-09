import React from 'react';
import styles from '../styles/ProfileHeader.module.css';
import CommunityProfile from './CommunityProfile';
const ProfileHeader = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.banner}>
            <img 
              src="https://styles.redditmedia.com/t5_2qmjl/styles/bannerBackgroundImage_2qok6gpoiud71.png?width=2176&frame=1&auto=webp&s=383b34314d2cf814fb3f331fa0856128c673fb35" 
              // src="https://preview.redd.it/new-batch-7680x2160-ultrawide-wallpapers-02-02-link-in-v0-y71483bumtge1.jpg?width=7680&format=pjpg&auto=webp&s=35c5cd02957313d13a3a40be1cb49e6f40fc55d5" 
              alt="Profile Banner" 
              className={styles.bannerImg}
            />
          </div>
          <div className={styles.profileSection}>
            <div className={styles.profilePicture}>
              <img 
                src="./img/praneelpic.jpeg" 
                alt="Profile Picture" 
                className={styles.profilePictureImg}
              />
            </div>
            <div className={styles.profileName}>r/praneelchetty</div>
          </div>
          <div className={styles.filters}>
            <button className={styles.filterButton}>
              Top
              <span className={styles.filterButtonAfter}></span>
            </button>
            <button className={styles.filterButton}>
              All Time
              <span className={styles.filterButtonAfter}></span>
            </button>
            <button className={`${styles.filterButton} ${styles.menuButton}`}>
              ⋮
            </button>
          </div>
        </div>
      </div>
      {/* <CommunityProfile/> */}
    </div>
    
  );
};

export default ProfileHeader;