import BtnDefault from '../BtnDefault/BtnDefault';
import { useCounter } from '../../hooks/CounterContext';

interface TabSushilkaProps {
  title: string;
}

const TabMpa: React.FC<TabSushilkaProps> = ({ title }) => {
  const { count, increment } = useCounter(); // Используем контекст

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
    </>
  );
};

export default TabMpa;
