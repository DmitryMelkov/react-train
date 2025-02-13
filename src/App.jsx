import { useState } from 'react';
import Header from './components/Header/Header';
import TabBtns from './components/Tabs/TabBtns';
import TabPC from './components/Tabs/TabPC';
import styles from './App.module.scss';

function App() {
  const [tab, setTab] = useState('ПК1');

  return (
    <div className="container">
      <Header />
      <div className={styles['tab']}>
        <TabBtns active={tab} onChange={(current) => setTab(current)} />

        {tab === 'ПК1' && (
          <div className={styles['tab__content']}>
            <TabPC url={'http://169.254.0.156:3002/api/vr1-data'} title={'ПК №1'} />
            <TabPC url={'http://169.254.0.156:3002/api/vr2-data'} title={'ПК №2'} />
          </div>
        )}
        {tab === 'МПА2' && <div>МПА2 контент</div>}
        {tab === 'Сушилка1' && <div>Сушилка1 контент</div>}
      </div>
    </div>
  );
}

export default App;
