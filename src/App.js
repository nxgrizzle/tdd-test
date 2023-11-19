import React, { useState } from "react";
import { incrementCount, decrementCount } from "./utils/counter";
const App = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <h1 className="hello">Hello World!</h1>
      <h2 className="counter">{state}</h2>
      <button
        className="button"
        onClick={() => setState((prev) => incrementCount(prev))}
      >
        Increment
      </button>
      <button
        className="decrement"
        onClick={() => setState((prev) => decrementCount(prev))}
      >
        Decrement
      </button>
    </div>
  );
};
export default App;
