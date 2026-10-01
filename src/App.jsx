import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <h1 className="title">React Calculator</h1>
        <div className="display">
          <div className="input">{input || '0'}</div>
          <div className="result">{result !== '' ? `= ${result}` : ''}</div>
        </div>
        <div className="keypad">
          <button className="btn-action" onClick={handleClear}>C</button>
          <button className="btn-action" onClick={handleDelete}>DEL</button>
          <button className="btn-operator" onClick={() => handleClick('/')}>/</button>
          <button className="btn-operator" onClick={() => handleClick('*')}>*</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button className="btn-operator" onClick={() => handleClick('-')}>-</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button className="btn-operator" onClick={() => handleClick('+')}>+</button>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button className="row-span btn-equals" onClick={handleCalculate}>=</button>

          <button className="col-span" onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
