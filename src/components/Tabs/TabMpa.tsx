import BtnDefault from '../BtnDefault/BtnDefault';
import { useCounter } from '../../hooks/CounterContext';
import { useEffect, useState } from 'react';

interface TabSushilkaProps {
  title: string;
}

const TabMpa: React.FC<TabSushilkaProps> = ({ title }) => {
  const { count, increment } = useCounter(); // Используем контекст

  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    setDisplayValue(inputValue);
  }, [inputValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <h1>{title}</h1>

      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <h2>Вы ввели: {displayValue}</h2>
      </div>

      <div>
        <div>{count}</div>
        <BtnDefault
          onClick={() => {
            increment();
          }}
          children={'Increase'}
        />
      </div>
    </>
  );
};

export default TabMpa;
