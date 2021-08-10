1. npx create-react-app the_name_of_your_app
2. cd the_name_of_your_app
3. npm start
4. Installing npm modules for example:
npm i axios react-router redux react-redux
5. create new folder for components
6. create new component:
the name of the file should be width Uppercase - Counter.js
the name of the component should be the same
​
import React from 'react';
class Counter extends React.Component {
​
}
​
const Counter = (props) => {
​
}
​
export default Counter;
​
7. Life Cicle of a class component
first stage - mount -> constructor -> render -> componentDidMount
second stage - update -> setState() -> render -> componentDidUpdate
third stage - unmount -> componentWillUnmount
​
8. function component with hooks
useState: const [state, setState] = useState(init value: [], {}, '', 0);
useEffect: useEffect(()=>{}) = componentDidMount,componentDidUpdate,componentWillUnmount
useEffect(()=>{},[]) = componentDidMount
useEffect(()=>{},[state]) = componentDidUpdate
​
9. Wrap a component - get the children of it,
for example: error handler
​
Redux
1. create new folder for redux
2. npm i redux react-redux
3. create the reducers.js file -
init state, action.type, return {...state,
                                  user: action.paylod,
                                  usertext:action.payload1}
4. create the actions.js file - return {type,payload}
​
export const addUser = (value, value1) => {
  return {
    type: 'ADD_USER',
    payload: value,
    payload1: value1
  }
}
​
5. root component - index.js or App.js
createStore - import {createStore} from 'redux'
createStore(reduser)
import {reducer} from './reducer folder/name pf reducer'
example './redux/reducers'
Wrap the component with the store - Provider store={store}
​
6. Connect component to store - import {connect} from 'react-redux';
​
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
const mapStateToProps = (state) => {}
const mapDispatchToProps = (dispatch) ={}