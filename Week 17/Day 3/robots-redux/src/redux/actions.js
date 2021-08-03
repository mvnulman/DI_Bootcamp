
export const addOne = () => {
  console.log('ADD_ONE');
  return {
    type: 'ADD_ONE'
  }
}

export const minusOne = () => {
  console.log('MINUS_ONE');
  return {
    type: 'MINUS_ONE'
  }
}
