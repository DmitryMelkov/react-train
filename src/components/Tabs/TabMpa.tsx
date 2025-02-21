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

  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const usersFetch = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('settings error');
      }

      const data = await response.json();

      setUsers(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('unknown error');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    usersFetch();
  });

  if (loading) {
    <div>loading</div>;
  }

  if (error) {
    <div>error {error}</div>;
  }

  // Используем useEffect для обновления displayValue
  useEffect(() => {
    setDisplayValue(inputValue);
  }, [inputValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <h1>{title}</h1>

      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>

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
