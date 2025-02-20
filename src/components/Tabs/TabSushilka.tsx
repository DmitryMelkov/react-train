import { useState } from 'react';
import BtnDefault from '../BtnDefault/BtnDefault';
import Example from '../Example';
import { useCounter } from '../../hooks/CounterContext';

interface TabSushilkaProps {
  title: string;
}

const TabSushilka: React.FC<TabSushilkaProps> = ({ title }) => {
  const { count, increment } = useCounter(); // Используем контекст
  const [descr, setDescr] = useState('current descr');

  return (
    <>
      <h1>{title}</h1>

      <div>
        <div>{count}</div>
        <BtnDefault
          onClick={() => {
            increment();
          }}
          children={'Increase'}
        />
      </div>

      <div>
        <Example descr={descr} />
        <BtnDefault
          onClick={() => {
            setDescr('new descr');
          }}
          children={'change descr'}
        />
      </div>
    </>
  );
};

export default TabSushilka;
