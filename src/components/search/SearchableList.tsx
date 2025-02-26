import { useRef, useState } from 'react';
import BtnDefault from '../BtnDefault/BtnDefault';

interface SearchabeListProps {
  title: string;
  list: any;
}

interface ListItem {
  id: number;
  title: string;
}

const SearchabeList: React.FC<SearchabeListProps> = ({ title, list }) => {
  const [searchString, setSearchString] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  const filteredList = list.filter((item: ListItem) => item.title.toLowerCase().includes(searchString.toLowerCase()));

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <h1>{title}</h1>

      <label>
        <span>Поиск</span>
        <input type="text" value={searchString} onChange={handleSearch} ref={inputRef} />
      </label>

      <BtnDefault onClick={handleFocus}>Сфокусироваться на вводе</BtnDefault>

      <ul>
        {filteredList.map(({ title, id }: ListItem) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </>
  );
};

export default SearchabeList;
