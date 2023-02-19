import { useContext, useState } from "react";

import { counterContext } from "../../context/counter";

import styles from "./Counter.module.css";

export function Counter() {
  const counter = useContext(counterContext);

  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => counter.decrement()}
        >
          -
        </button>
        <span className={styles.value}>{counter.count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => counter.increment()}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => counter.incrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => counter.incrementAsync(incrementValue)}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => counter.incrementIfOdd(incrementValue)}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
