import React, { useState, createContext, PropsWithChildren } from "react";
import { fetchCount } from "../features/counter/counterAPI";

interface API {
  // The state
  count: number;

  // Mutators
  decrement: () => void;
  increment: () => void;
  incrementByAmount: (amount: number) => void;
  incrementAsync: (amount: number) => Promise<void>;
  incrementIfOdd: (amount: number) => void;
}

export const counterContext = createContext<API>({
  count: 0,
  decrement: () => {},
  increment: () => {},
  incrementByAmount: () => {},
  incrementAsync: async () => {},
  incrementIfOdd: () => {},
});

const { Provider } = counterContext;

interface Props extends PropsWithChildren {
  initialCount: number;
}

export const CounterProvider: React.FC<Props> = ({
  initialCount,
  children,
}) => {
  const [count, setCount] = useState(initialCount);

  const decrement: API["decrement"] = () => {
    setCount((prev) => prev - 1);
  };

  const increment: API["increment"] = () => {
    setCount((prev) => prev + 1);
  };

  const incrementByAmount: API["incrementByAmount"] = (amount) => {
    setCount((prev) => prev + amount);
  };

  const incrementAsync: API["incrementAsync"] = async (amount) => {
    // fake an async call
    await fetchCount();
    setCount((prev) => prev + amount);
  };

  const incrementIfOdd: API["incrementIfOdd"] = (amount) => {
    setCount((prev) => {
      if (prev % 2 === 1) {
        return prev + amount;
      }
      return prev;
    });
  };

  return (
    <Provider
      value={{
        count,
        decrement,
        increment,
        incrementByAmount,
        incrementAsync,
        incrementIfOdd,
      }}
    >
      {children}
    </Provider>
  );
};
