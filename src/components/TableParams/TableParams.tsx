import styles from './TableParams.module.scss';

interface TableComponentProps {
  title: string; // Заголовок таблицы
  data: Record<string, number | string> | null; // Данные таблицы, где ключ - строка, а значение - число или строка
}

const TableComponent: React.FC<TableComponentProps> = ({ title, data }) => {
  return (
    <>
      <table className={styles['table']}>
        <caption className={styles['table__title']}>{title}</caption>
        <thead className={styles['table__thead']}>
          <tr className={styles['table__tr']}>
            <th className={`${styles['table__th']} ${styles['table__left']}`}>Наименование</th>
            <th className={`${styles['table__th']}`}>Значение</th>
          </tr>
        </thead>
        <tbody className={styles['table__tbody']}>
          {data ? (
            Object.entries(data).map(([key, value]) => (
              <tr className={styles['table__tr']} key={key}>
                <td className={`${styles['table__td']} ${styles['table__left']}`}>{key}</td>
                <td className={`${styles['table__td']} ${styles['table__right']}`}>{value} °C</td>
              </tr>
            ))
          ) : (
            <tr className={styles['table__tr']}>
              <td colSpan={2}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
