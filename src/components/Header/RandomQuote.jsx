import { useEffect, useState } from 'react';
import { quotes } from './dataQuote';
import styles from './Header.module.scss';

const RandomQuote = () => {
  const [quote, setQuote] = useState('Случайная цитата');


  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`${styles['quote-container']}`}>
      <p>{quote}</p>
    </div>
  );
};

export default RandomQuote;
