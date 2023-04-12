import './App.css';
import React, { useState } from 'react';
import {ImageRender} from './ImageRenderFunction';


function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <ImageRender className="w-10 h-10"/>
    </div>

  );
}

export  default Counter;


