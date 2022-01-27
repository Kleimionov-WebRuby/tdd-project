import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncClick = () => setCount((prev) => ++prev);
  const handleDecClick = () => setCount((prev) => (prev > 0 ? --prev : prev));

  return (
    <div data-test="component-counter">
      <h1 data-test="counter-display">
        The count is <span data-test="count">{count}</span>
      </h1>

      <button data-test="increment-button" onClick={handleIncClick}>
        Increment counter
      </button>
      <button data-test="decrement-button" onClick={handleDecClick}>
        Decrement counter
      </button>
    </div>
  );
};

export default Counter;
