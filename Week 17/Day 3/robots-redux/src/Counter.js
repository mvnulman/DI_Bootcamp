import React from 'react';
import {connect} from 'react-redux';
import CounterButtons from './CounterButtons';

const Counter = (props) => {
  return (
    <>
      <h1>{props.counter}</h1>
      <CounterButtons />
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}
export default connect(mapStateToProps,null)(Counter);
