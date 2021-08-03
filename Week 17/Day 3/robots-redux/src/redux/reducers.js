
let initState = {
  counter: 0
}

export const reducer = (state=initState,action={}) => {
  switch (action.type) {
    case 'ADD_ONE':
      return {...state, counter: state.counter + 1}
    case 'MINUS_ONE':
      return {...state, counter: state.counter - 1 }
    default:
      return {...state}
  }
}
