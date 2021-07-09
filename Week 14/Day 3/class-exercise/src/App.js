import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox';

function App() {
  return (
    <div>
      First Name: <input type='text'></input><br></br>
      Second Name: <input type='text'></input><br></br>
      <SearchBox />
    </div>
  );
}

export default App;
