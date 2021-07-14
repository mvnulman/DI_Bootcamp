import React from 'react'
import './App.css';

class App2 extends React.Component {
  constructor(){
    super();
    this.state = {
      countriesList: [],
      citiesList: []
    }
  }


componentDidMount(){
  fetch('http://localhost:5000/countries')
  .then(res => res.json())
  .then(countries => {
    console.log(countries)
    this.setState({countriesList:countries})
  })
  .catch (err => {
    console.log(err);
  })
}

onSelect = (e) => {
  fetch(`http://localhost:5000/cities/${e.target.value}`)
  .then(res => res.json())
  .then(cities => {
    this.setState({citiesList:cities})
  })
  .catch(err => {
    console.log(err);
  })
}

renderSelect = (array) => {
  if(array.length === 0)
    return null

  return (
    <select onChange={(e)=>this.onSelect(e)}>
    <option></option>
    {
      array.map((item,i)=>{
        return <option key={item.country_id||item.city_id} value={item.country_id||item.city_id}>{item.country||item.city}</option>
      })
    }
    </select>
  )
}

  render(){
    const {countriesList, citiesList} = this.state;
    return (
      <>
          {this.renderSelect(countriesList)}
          {this.renderSelect(citiesList)}

      </>
    );
  }

}

export default App2;