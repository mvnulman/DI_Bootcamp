import React from 'react'
import Fname from './components/Fname'
import Sname from './components/Sname'
import FindMatch from './components/FindMatch'
import Results from './components/Results'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      fname:'',
      sname:'',
      results: {}
    }
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  // handleChangeSname = (e) => {
  //   console.log(e.target.name, e.target.value);
  //   this.setState({
  //     sname:e.target.value
  //   })
  // }

  findMatch = () => {
    fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice", {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-key": "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c",
    		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
    	}
    })
    .then(response => {
    	console.log(response);
    })
    .catch(err => {
    	console.error(err);
    });
  }

  render(){
    return (
      <>
        <Fname fname={this.state.fname} handleChange={this.handleChange}/>
        <Sname sname={this.state.sname} handleChange={this.handleChange}/>
        <FindMatch findMatch={this.findMatch}/>
        <Results />
      </>
    );
  }

}

export default App;
