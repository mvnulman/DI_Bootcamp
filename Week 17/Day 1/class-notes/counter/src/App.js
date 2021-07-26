import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';

function App() {
  const [counter, setCounter] = useState(0)
  const addOne = () => {
    setCounter(counter+1)
  }

  const minusOne = () => {
    setCounter(counter-1)
  }

  return (
    <div className="App">
      <Counter />
      <Counter2 addOne={addOne} minusOne={minusOne} />
    </div>
  );
}

export default App;
