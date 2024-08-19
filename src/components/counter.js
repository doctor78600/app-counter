import React, { useState } from 'react';
import '../components/counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const increment = () => setCount(prevCount => Math.min(prevCount + step, maxValue));
  const decrement = () => setCount(prevCount => Math.max(prevCount - step, minValue));
  const reset = () => setCount(0);

  const handleStepChange = (e) => setStep(Number(e.target.value));
  const handleMinChange = (e) => setMinValue(Number(e.target.value));
  const handleMaxChange = (e) => setMaxValue(Number(e.target.value));

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <div>
        <button id='btn' onClick={increment}>Increment</button>
        <button id='btn1' onClick={decrement}>Decrement</button>
        <button id='btn2' onClick={reset}>Reset</button>
      </div>
      <div className='input'>
        <label>
          Step:
          <input type="number" value={step} onChange={handleStepChange} />
        </label>
      </div>
      <div className='input'>
        <label>
          Min Value:
          <input type="number" value={minValue} onChange={handleMinChange} />
        </label>
        <label id='lable1'>
          Max Value:
          <input type="number" value={maxValue} onChange={handleMaxChange} />
        </label>
      </div>
    </div>
  );
};

export default Counter;
