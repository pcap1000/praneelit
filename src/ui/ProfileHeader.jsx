import React, { useState } from 'react';
import styles from '../styles/ProfileHeader.module.css';

const ProfileHeader = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleClick = (button) => {
    setActiveTooltip(activeTooltip === button ? null : button);
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.banner}>
            <img 
              src="https://styles.redditmedia.com/t5_2qmjl/styles/bannerBackgroundImage_2qok6gpoiud71.png?width=2176&frame=1&auto=webp&s=383b34314d2cf814fb3f331fa0856128c673fb35"  
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
            <button 
              className={styles.filterButton} 
              data-tooltip="Fake" 
              onClick={() => handleClick('top')}
            >
              Top
              <span className={styles.filterButtonAfter}></span>
              {activeTooltip === 'top' && <div className={styles.tooltip}>Fake</div>}
            </button>
            <button 
              className={styles.filterButton} 
              data-tooltip="Fake" 
              onClick={() => handleClick('allTime')}
            >
              All Time
              <span className={styles.filterButtonAfter}></span>
              {activeTooltip === 'allTime' && <div className={styles.tooltip}>Fake</div>}
            </button>
            <button 
              className={`${styles.filterButton} ${styles.menuButton}`} 
              data-tooltip="Fake" 
              onClick={() => handleClick('menu')}
            >
              ⋮
              {activeTooltip === 'menu' && <div className={styles.tooltip}>Fake</div>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
