import './App.css';
import PrintHelloComponent from './components/PrintHelloComponent'
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCard from './components/BootstrapCard';

const PrintHello = () =>{
  return (
    <div>
      <p>Exercise 1: Function / JSX </p>
      <h1>I Love React</h1>
      <br></br>

      <p>Exercise 2: Creating A Functional Component </p>
      <PrintHelloComponent/>
      <br></br>

      <p>Exercise 3: Bootstrap</p>
      <BootstrapCard />
      <br></br>

      <p>Exercise 4: Component Properties</p>
      <br></br>

      <p>Exercise 5: Jumbotron</p>
    </div>
  );
}

export default PrintHello;
