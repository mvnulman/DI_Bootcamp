import React from 'react'

class Fname extends React.Component {

  render(){
    console.log(this.props);
    return(
      <div>
        First:<input
        name='fname'
        value={this.props.fname}
        type="text"
        onChange={this.props.handleChange}/> {this.props.fname}
      </div>
    )
  }
}
export default Fname;
