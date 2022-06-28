import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(5);

  return (
    <div>
      <div>{counter}</div>
      <div>
        <button
          onClick={() => {
            setCounter((s) => s - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCounter((s) => s + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
