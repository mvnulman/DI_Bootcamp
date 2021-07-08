import React, { useState, useEffect} from "react";
import "./App.css";

const App = () => {
  const [quotes, setQuotes] = useState ('');

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      const randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    });
  };

  useEffect(() => {
    getQuote ();
  }, [])
  
    return (
      <div className = "App" >
        <div className = "quote-container">
        <h1>"{quotes.text}"</h1>
        <h2>{quotes.author}</h2><br/>
        <button className ="btn" onClick = {getQuote}> New quote</button>
        </div>
    </div>
    );
};

export default App;
