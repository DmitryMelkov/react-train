import BtnDefault from '../BtnDefault/BtnDefault';

interface TabBtnsProps {
  active: string;
  onChange: (value: string) => void;
}

const TabBtns: React.FC<TabBtnsProps> = ({ active, onChange }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <BtnDefault isActive={active === 'ПК1'} onClick={() => onChange('ПК1')}>
        ПК
      </BtnDefault>
      <BtnDefault isActive={active === 'МПА2'} onClick={() => onChange('МПА2')}>
        МПА
      </BtnDefault>
      <BtnDefault isActive={active === 'Сушилка1'} onClick={() => onChange('Сушилка1')}>
        Сушилка
      </BtnDefault>
      <BtnDefault isActive={active === 'Карточки товаров'} onClick={() => onChange('Карточки товаров')}>
        Карточки товаров
      </BtnDefault>
      <BtnDefault isActive={active === 'Поиск'} onClick={() => onChange('Поиск')}>
        Поиск
      </BtnDefault>
    </div>
  );
};

export default TabBtns;
