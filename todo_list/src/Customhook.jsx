import { useState } from 'react';

const useCustomhook = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => { // Correct spelling
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset }; // Correct spelling
};

export default useCustomhook;
