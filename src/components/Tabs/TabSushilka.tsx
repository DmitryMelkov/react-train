import { useEffect, useState } from 'react';
import BtnDefault from '../BtnDefault/BtnDefault';
import Example from '../Example';
import { useCounter } from '../../hooks/CounterContext';

interface TabSushilkaProps {
  title: string;
}

const TabSushilka: React.FC<TabSushilkaProps> = ({ title }) => {
  const { count, increment } = useCounter(); // Используем контекст
  const [descr, setDescr] = useState('current descr');

  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | String>(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('error settings');
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
    fetchUsers();
  }, []);

  if (loading) {
    <div>loading...</div>;
  }

  if (error) {
    <div>error {error}</div>;
  }

  return (
    <>
      <h1>{title}</h1>

      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>

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
