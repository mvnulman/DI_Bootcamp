import React, {useState, useEffect} from 'react';


const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('Counter', counter)
    }, [counter])


    const handleCounter = () => {
        setCounter(counter + 1)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    return (
        <>
        <h1>Counter: {counter}</h1>
        <button onClick={handleCounter}>Add 1+ !!!</button>
        <h1>Your Name is: {name}</h1>
        <input type="text" onChange = {(e)=>handleName(e)}></input>
        </>
    )
}


export default Counter;












// old version react method

// class Counter extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             counter: 0
//         };
//     }

//     handleClick = () => {
//         this.setState({counter: this.state.counter +1 })

        
//     }

//     render() {
//         if (this.state.counter === 4) 
//         {throw new Error ('You reach the number 5!')}
//         return (
//             <>
//                 <h2>{this.state.counter}</h2>
//                 <button onClick={this.handleClick} > Add 1</button>
//             </>
//         )
//     }
// }

// export default Counter