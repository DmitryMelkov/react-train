import styles from './Header.module.scss';
import '../../index.scss';
import { useEffect, useState } from 'react';
import RandomQuote from './RandomQuote';

const Header = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(interval);
      console.log('cleaning...');
    };
  }, []);

  return (
    <div className={`${styles['header']}`}>
      <img src="/vite.svg" alt={'logo'} />
      <RandomQuote />
      <div className={styles['header__time']}>{now.toLocaleTimeString()}</div>
    </div>
  );
};

export default Header;
