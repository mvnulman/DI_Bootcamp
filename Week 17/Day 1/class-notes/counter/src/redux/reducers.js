import { combineReducers } from 'redux';

let initState = {
  counter: 0,
}

export const reducer_minus = (state=initState,action={}) => {
  switch (action.type) {
    case 'MINUS_ONE':
      return {...state, counter: state.counter - 1 }
    default:
      return {...state}
  }
}

export const reducer_plus = (state=initState,action={}) => {
  switch (action.type) {
    case 'ADD_ONE':
      return {...state, counter: state.counter + 1 }
    default:
      return {...state}
  }
}


export const reducer = combineReducers({
  reducer_plus,
  reducer_minus
})