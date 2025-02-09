import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
import UserPanel from './UserPanel';

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.headerBar}>
      <Logo />
      {!isMobile && <SearchBar />} {/* Hide search bar on mobile */}
      <UserPanel />
    </div>
  );
}

export default Header;
