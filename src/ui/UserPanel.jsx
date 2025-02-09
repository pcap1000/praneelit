import styles from '../styles/UserPanel.module.css';

function UserPanel() {
  return (
    <div className={styles.userPanel}>
      <div className={styles.profile}>
        <img 
          src="https://i.redd.it/6mz5s8nskzna1.jpg" 
          className={styles.profileImage} 
        />
        {/* <span className={styles.profileName}>John Doe</span> */}
      </div>
    </div>
  );
}

export default UserPanel;
