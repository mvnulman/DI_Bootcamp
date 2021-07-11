import React, { useState } from 'react';
import Select from 'react-select'
import ReactDOM from 'react-dom';
import './App';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setTotal] = useState(number1 + number2);
  const [multiply, setMultiply] = useState(number1 * number2);
  const [subtraction, setSubtraction] = useState(number1 - number2);
  
  const options = [{value: {calculateTotal}, label: "Calculate"}, {value: {multiplyNum}, label: "Multiply"}, {value: {subtraction}, label: "Subtraction"}]

  function calculateTotal() {
    setTotal(number1 + number2);
  }

  function multiplyNum() {
    setMultiply(number1 * number2);
  }

  function subtractionNum() {
    setSubtraction(number1 - number2);
  }

  const refreshPage = () => {
    window.location.reload();
 }


  return (
    <div className="App">
      <h1>React Calculator</h1>

      <div className="number-inputs">
        <input id="input1"
          type="number"
          value={number1}
          onChange={e => setNumber1(+e.target.value)}
          placeholder="0"
        />
        <input id="input2"
          type="number"
          value={number2}
          onChange={e => setNumber2(+e.target.value)}
          placeholder="0"
        />
      </div>

      <Select className="option-form" options = {options}/>
      
      <button onClick={calculateTotal}>+</button>
      <button onClick={subtractionNum}>-</button>
      <button onClick={multiplyNum}>X</button>
      <button onClick={refreshPage}>C</button>

      <h2>{sum + multiply + subtraction}</h2>

    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
