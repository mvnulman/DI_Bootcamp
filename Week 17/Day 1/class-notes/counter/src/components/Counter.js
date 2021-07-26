import React, { Component } from "react";

class Counter extends Component {
  state = {
    title: "The Best Counter of the Earth",
    counter: 0
  };

  incrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  decrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  };

  render() {
    return (
      <section >
        <div >
          <h1>{this.state.title}</h1>
          <div >
            <div >
              <button onClick={this.incrementCounter}> + Increment!!!
              </button>
            </div>
            <div >
              <h2>{this.state.counter}</h2>
            </div>
            <div >
              <button onClick={this.decrementCounter}> - Decrement!!!
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Counter;