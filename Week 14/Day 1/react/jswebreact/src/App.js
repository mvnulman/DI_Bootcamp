import React from 'react';
import Robots from './components/Robots';
import SearchBox from './components/SearchBox';
import 'tachyons';
// import {robots} from './robots'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name: '',
      robots: [],
      searchText: ''
    }
    console.log('constructor');
  }
  componentDidMount(){
    console.log('componentDidMount');
    this.setState({name:'Robots App'});
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(users => {
    //   this.setState({robots:users})
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  }

  //
  handleClick = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      this.setState({robots:users})
    })
    .catch(err => {
      console.log(err);
    })
  }
  //
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  handleChange = (e) =>{
    console.log(e.target.value);
    this.setState ({searchText:e.target.value})
  }

  render(){
    console.log('render');
    const {name,robots, searchText} = this.state;

    const filteredRobots = robots.filter(item => {
      console.log(item)
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
      <div className='tc bg-light-gray'>
        <h1>{name}</h1>
        <SearchBox clickMe = {this.handleClick} handleChange = {this.handleChange} />
        {
          filteredRobots.map((item,i)=>{
            return <Robots key={i} user={item} />
          })
        }

      </div>
    );
  }
}

export default App;
