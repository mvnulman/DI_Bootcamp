import React from 'react';
import {connect} from 'react-redux'
import {addOne,minusOne} from './redux/actions'

const containerStyle = {
  display: 'flex'
}

const buttonStyle = {
  fontSize: '1.5rem',
  width: '40px',
  height: '40px'
}

const CounterButtons = (props) => {
  return(
    <div style={containerStyle}>
      <button onClick={props.minusOne} style={buttonStyle}>-</button>
      <button onClick={props.addOne} style={buttonStyle}>+</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addOne: () => dispatch(addOne()),
    minusOne: () => dispatch(minusOne())
  }
}
export default connect(null,mapDispatchToProps)(CounterButtons);
