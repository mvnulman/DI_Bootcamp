import React, {useState, useEffect} from 'react';
import Counter from './Counter'
import './App.css';
import axios from 'axios';

const App = () => {
  const [todos , setTodos] = useState({});
  const [title , setTitle] = useState('');
  const [userid , setUserid] = useState();


  const addToDo = () => {
    axios
      .post(`https://jsonplaceholder.typicode.com/todos`, {
        title,
        userid,
        completed: false
      })
      .then(res => {
        setTodos(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="App" >
      <header className="App-header">
        <div>
          Title: <input onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div>
          User: <input onChange={(e)=>setUserid(e.target.value)} />
        </div>
        <div>
          <button onClick={addToDo}>Add To Do</button>
        </div>
        Title: {todos.title} User: {todos.userid} Completed: { todos.completed?'YES':'NO'}
      </header>
    </div>
  );
}

export default App;
