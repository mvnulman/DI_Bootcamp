import React from 'react'
import './App.css';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';
import {connect} from 'react-redux';
import 'tachyons';
import axios from 'axios'
import {fetchRobots} from './redux/actions'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      // arr: [],
      // searchText:''
    }
  }

  async componentDidMount(){
    this.props.fetchData();
  //   try {
  //     let res = await axios.get('https://jsonplaceholder.typicode.com/users');
  //     let data = res.data;
  //   this.setState({arr:data})
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // handleChange = (event) => {
  //   // console.log(event.target.value);
  //   this.setState({ searchText:event.target.value })
  // }
  }


  render(){

    // const {arr} = this.state;
    const {searchText, arr} = this.props

    const filteredRobots = arr.filter(item=>{
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
      <div className='tc'>
        <SearchBox />
        <CardsList robots={filteredRobots} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
    arr: state.robots
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchRobots())
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (App);
