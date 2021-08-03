import React, {useState} from 'react';
import Counter from './Counter'
import './App.css';

const App = () => {
  return (
    <div className="App" >
      <header className="App-header">
        Redux Example
        <Counter />
      </header>
    </div>
  );
}

export default App;
