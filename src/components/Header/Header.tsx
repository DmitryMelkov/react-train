import styles from './Header.module.scss';
import '../../index.scss';
import { useEffect, useState } from 'react';
import RandomQuote from './RandomQuote';
import useNowDate from '../../hooks/useNowDate';

const Header: React.FC = () => {
  const now = useNowDate();

  return (
    <div className={`${styles['header']}`}>
      <img src="/vite.svg" alt="logo" />
      <RandomQuote />
      <div className={styles['header__time']}>{now.toLocaleTimeString()}</div>
    </div>
  );
};

export default Header;
