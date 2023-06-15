
import React, { useState } from 'react';
import './styles/styles.css';
import incrementGif from './YzDJ.gif';
import decrementGif from './YzDJ.gif';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <div className="box">
        <h1 className="count">{count}</h1>
        <div className="image-container">
          {count > 0 ? (
            <img className="gif-image" src={incrementGif} alt="Increment" />
          ) : (
            <img className="gif-image" src={decrementGif} alt="Decrement" />
          )}
        </div>
        <div className="button-container">
          <button className="decrement-btn" onClick={decrementCount}>
            -
          </button>
          <button className="increment-btn" onClick={incrementCount}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
