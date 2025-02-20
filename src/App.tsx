import React, { useState } from 'react';
import Header from './components/Header/Header';
import TabBtns from './components/Tabs/TabBtns';
import TabPC from './components/Tabs/TabPC';
import styles from './App.module.scss';
import TabSushilka from './components/Tabs/TabSushilka';
import { CounterProvider } from './hooks/CounterContext';
import TabMpa from './components/Tabs/TabMpa';

const App: React.FC = () => {
  const [tab, setTab] = useState<string>('ПК1');

  return (
    <div className="container">
      <Header />
      <div className={styles['tab']}>
        <TabBtns active={tab} onChange={(current: string) => setTab(current)} />

        {tab === 'ПК1' && (
          <div className={styles['tab__content']}>
            <TabPC url={'http://169.254.0.156:3002/api/vr1-data'} title={'ПК №1'} />
            <TabPC url={'http://169.254.0.156:3002/api/vr2-data'} title={'ПК №2'} />
          </div>
        )}
        {tab === 'МПА2' && (
          <CounterProvider>
            <TabMpa title={'МПА №2'} />
          </CounterProvider>
        )}
        {tab === 'Сушилка1' && (
          <CounterProvider>
            <TabSushilka title={'Сушилка №1'} />
          </CounterProvider>
        )}
      </div>
    </div>
  );
};

export default App;
