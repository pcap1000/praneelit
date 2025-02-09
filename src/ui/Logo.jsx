import styles from '../styles/Logo.module.css';

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img
        className={styles.logo}
        src="./img/reddit-logo-transparent.webp"
        //  src="./public/img/reddit-logo-nobg.png"
      />
      <img
        className={styles.name}
        src="./img/praneelitorg.png"
        //  src="./public/img/reddit-logo-nobg.png"
      />
    </div>
  );
}

export default Logo;
