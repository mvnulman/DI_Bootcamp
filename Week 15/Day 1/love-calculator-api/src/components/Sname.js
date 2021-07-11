import React from 'react'

class Sname extends React.Component {
  render(){
    return(
      <div>
        Second:<input
        name='sname'
        value={this.props.sname}
        type="text"
        onChange={this.props.handleChange}/> {this.props.sname}
      </div>
    )
  }
}
export default Sname;
