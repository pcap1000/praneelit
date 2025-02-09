import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLock } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/CommunityProfile.module.css';

const CommunityProfile = () => {
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 960 && window.innerWidth > 768);
  const [sidebarWidth, setSidebarWidth] = useState(getSidebarWidth());

  function getSidebarWidth() {
    if (window.innerWidth > 1200) return '22vw';
    if (window.innerWidth <= 960 && window.innerWidth > 768) return '30vw';
    return '280px';
  }

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 960 && window.innerWidth > 768);
      setSidebarWidth(getSidebarWidth());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (window.innerWidth <= 768) return null;

  return (
       <div className={styles.profileWrapper}>
      <div className={styles.profileContainer}>
        <div className={styles.headerContainer}>
          <h2 className={styles.username}>praneelchetty</h2>
          <p className={styles.description}>
            I'm a B.Tech student at Amrita University, Bengaluru, pursuing a degree in Electronics 
            and Computer Engineering (2023-2027). I'm passionate about web development and machine 
            learning, and I enjoy building mechanical projects. I'd like to think I'm a fun person too!
          </p>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
              Created Feb 01, 2025
            </div>
            
            <div className={styles.metaItem}>
              <FontAwesomeIcon icon={faLock} className={styles.icon} />
              Restricted
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>1k</div>
            <div className={styles.statLabel}>Visitors</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>4</div>
            <div className={styles.statLabel}>
              <span className={styles.onlineDot}></span> Online
            </div>
          </div>
        </div>

        <div className={styles.navigation}>
          <button className={styles.navButton}>COMMUNITY BOOKMARK</button>
        </div>

        <div className={styles.socialLinks}>
          <a 
            href="https://www.instagram.com/praneel_010/" 
            className={styles.socialButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a 
            href="https://github.com/pcap1000" 
            className={styles.socialButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>

        <div className={styles.divider} />

        <div className={styles.rules}>
          <h3 className={styles.rulesTitle}>Praneel Rules</h3>
          <ul>
            <li>1. Build, Break, Repeat</li>
            <li>2. If You Can't Sell It, Don't Build It</li>
            <li>3. Mechanical Minds Welcome</li>
            <li>4. Keep Learning, Keep Building</li>
          </ul>
        </div>

        <div className={styles.divider} />

        <div className={styles.moderators}>
          <h3 className={styles.moderatorsTitle}>Moderators</h3>
          <div className={styles.modItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXhMliaCOevY-zCTszqqADpEI3lgwSz8MY1Q&s" alt="Moderator" className={styles.modAvatar} />
            <span className={styles.moderatorName}>u/praneelchetty</span>
          </div>
          <div className={styles.modItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQ1LrYT6sV9CegkyegHHsPQOXwMNv7DE-rpummddAbW28ws37pDtjNjDLM99N_Arobds&usqp=CAU" alt="Moderator" className={styles.modAvatar} />
            <span className={styles.moderatorName}>u/mouthwithnoteeth</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityProfile;
