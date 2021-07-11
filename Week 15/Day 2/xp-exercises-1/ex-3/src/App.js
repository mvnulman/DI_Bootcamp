import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "red",
    };
  }

  clickChangeColor = () =>  {
    this.setState({ favoriteColor: 'pink' })
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.clickChangeColor}>Click here!</button>
      </>
    );
  }
}

export default App;