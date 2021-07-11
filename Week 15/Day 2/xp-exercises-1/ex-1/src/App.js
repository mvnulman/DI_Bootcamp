import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      favoriteColor: 'red',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoriteColor: 'yellow'})
    }, 5000);
  }

  render() {
  return (
    <>
      <h1>My favorite color is {this.state.favoriteColor}</h1>
    </>
  )
}
}

export default App;