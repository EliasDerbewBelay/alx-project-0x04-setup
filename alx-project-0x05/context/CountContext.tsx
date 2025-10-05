import { createContext, useContext, useState, ReactNode } from "react";

interface CounterContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const CountContext = createContext<CounterContextProps | undefined>(
  undefined
);

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <CountContext.Provider value={{ increment, decrement, count }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error("useCount must be within a Count Provider");
  }

  return context;
};
