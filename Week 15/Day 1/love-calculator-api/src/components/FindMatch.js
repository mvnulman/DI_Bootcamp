import React from 'react'

class FindMatch extends React.Component {
  render(){
    return(
      <div>
        <button onClick={this.props.findMatch}>Find Match!!!</button>
      </div>
    )
  }
}
export default FindMatch;
