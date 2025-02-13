import BtnDefault from '../BtnDefault/BtnDefault';

const TabBtns = ({ active, onChange }) => {
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
    </div>
  );
};

export default TabBtns;
