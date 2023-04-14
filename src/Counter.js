import { useState } from "react";

export const Counter = (prop) => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <label>{prop.title}</label>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}></button>
    </div>
  );
};
