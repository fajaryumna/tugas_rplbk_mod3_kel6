import "./App.css";
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [showInformation, setInformation] = useState(false);

  useEffect(() => {
    if (count === 10) {
      setInformation(true);
    } else {
      setInformation(false);
    }
  }, [count]);

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  function Information({ count }) {
    return (
      <div className="notification">
        <p>Counter mencapai angka {count}!</p>
      </div>
    );
  }

  return (
    <div className="Main">
      <h1>Aplikasi Counter Kelompok 6</h1>
      <h1>{count}</h1>
      <div className="button-container">
        <button
          onClick={countDown}>
          -
        </button>
        <button
          onClick={countUp}>
          +
        </button>

      </div>
      {showInformation && <Information count={count} />}
    </div>
  );
}

export default Counter;
