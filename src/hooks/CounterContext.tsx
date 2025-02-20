import React, { createContext, useContext, useState } from 'react';

// Создаем контекст
const CounterContext = createContext<{ count: number; increment: () => void } | undefined>(undefined);

// Провайдер контекста
export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0); // Изначальное значение счетчика

  const increment = () => {
    setCount((prevCount) => prevCount + 1); // Увеличиваем счетчик
  };

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

// Хук для использования контекста
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};
